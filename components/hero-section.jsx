"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import * as THREE from "three"
import { Environment } from "@react-three/drei"

// Model Component
function Model({ mousePosition }) {
  const [model, setModel] = useState(null)
  const [error, setError] = useState(false)
  const [waving, setWaving] = useState(true)
  const [showGreeting, setShowGreeting] = useState(false)
  const modelRef = useRef()
  const rightArmRef = useRef()
  const handRRef = useRef()
  const forearmRRef = useRef()
  const shoulderRRef = useRef()
  const armRRef = useRef()
  const mouthRef = useRef()
  const { viewport } = useThree()

  // Function to find objects in the model
  const findObject = (parent, name) => {
    let result = null
    parent.traverse((obj) => {
      if (obj.name === name) {
        result = obj
      }
    })
    return result
  }

  // Function to log all object names in the model for debugging
  const logAllObjects = (parent) => {
    parent.traverse((obj) => {
      console.log(`Name: ${obj.name}, Type: ${obj.type}`)
    })
  }

  useEffect(() => {
    // Load the model
    const loader = new GLTFLoader()
    loader.load(
      "/genkub_greeting_robot.glb",
      (gltf) => {
        // Rotate the model to face the camera
        gltf.scene.rotation.y = -Math.PI / 2

        // Log all objects in the model for debugging
        console.log("Logging all objects in the model:")
        logAllObjects(gltf.scene)

        gltf.scene.traverse((node) => {
          if (node.isMesh) {
            let material

            // Special case: "Body_Circle_1"
            if (node.name === "Body_Circle_1") {
              material = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                metalness: 0.8,
                roughness: 0.2,
                envMapIntensity: 1.0,
              })
            }
            // Eyes: bluish
            else if (node.name.includes("Eye") || node.name === "Mouth") {
              material = new THREE.MeshStandardMaterial({
                color: 0x7091e6,
                metalness: 0.8,
                roughness: 0.2,
                envMapIntensity: 1.0,
              })
            }
            // Default: dark gray
            else {
              material = new THREE.MeshStandardMaterial({
                color: 0x222222,
                metalness: 0.8,
                roughness: 0.2,
                envMapIntensity: 1.0,
              })
            }

            node.material = material
          }
        })

        // Find all the relevant parts for animation
        const rightArm = findObject(gltf.scene, "ARM_R")
        const handR = findObject(gltf.scene, "HAND_R")
        const forearmR = findObject(gltf.scene, "Forearm_R")
        const shoulderR = findObject(gltf.scene, "Shoulder_R")
        const armR = findObject(gltf.scene, "Arm_R")
        const mouth = findObject(gltf.scene, "Mouth")

        // Store references to the parts
        if (rightArm) rightArmRef.current = rightArm
        if (handR) handRRef.current = handR
        if (forearmR) forearmRRef.current = forearmR
        if (shoulderR) shoulderRRef.current = shoulderR
        if (armR) armRRef.current = armR
        if (mouth) mouthRef.current = mouth

        // Store the model
        setModel(gltf.scene)

        // Show greeting after a short delay
        setTimeout(() => {
          setShowGreeting(true)

          // Hide greeting after 3 seconds
          setTimeout(() => {
            setShowGreeting(false)
          }, 3000)
        }, 1000)

        // Start waving animation
        setWaving(true)

        // Stop waving after 3 seconds
        setTimeout(() => {
          setWaving(false)
        }, 3000)
      },
      undefined,
      (error) => {
        console.error("An error occurred loading the model:", error)
        setError(true)
      },
    )

    // Restart waving animation every 10 seconds
    const waveInterval = setInterval(() => {
      setWaving(true)
      setShowGreeting(true)

      setTimeout(() => {
        setWaving(false)
        setShowGreeting(false)
      }, 3000)
    }, 10000)

    return () => clearInterval(waveInterval)
  }, [])

  useFrame((state) => {
    if (modelRef.current) {
      // Keep the model facing the camera
      modelRef.current.rotation.y = -Math.PI / 2

      // Convert mouse position to normalized device coordinates (-1 to +1)
      const x = (mousePosition.x / window.innerWidth) * 2 - 1
      const y = -(mousePosition.y / window.innerHeight) * 2 + 1

      // Scale the movement based on viewport size
      // Limit the movement range to keep the robot visible
      const targetX = x * 1.5 // Scale the horizontal movement
      const targetY = y * 0.8 // Scale the vertical movement

      // Apply smooth movement using interpolation
      modelRef.current.position.x += (targetX - modelRef.current.position.x) * 0.05
      modelRef.current.position.y += (targetY - modelRef.current.position.y) * 0.05
    }
  })

  if (error) {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#3D52A0" />
      </mesh>
    )
  }

  return model ? (
    <group>
      <primitive ref={modelRef} object={model} position={[0, -1, 0]} scale={1.2} />
    </group>
  ) : (
    <mesh>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="#7091E6" wireframe />
    </mesh>
  )
}

// HeroSection Component
export default function HeroSection({ id }) {
  // Fix: Initialize with null values to avoid window reference during SSR
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Set isMounted to true once component is mounted
    setIsMounted(true)

    // Now it's safe to access window
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    // Initialize mouse position to center of screen
    setMousePosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    })

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section id={id} className="min-h-screen relative flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-pale to-white dark:from-blue-dark dark:to-blue-dark/70">
        {isMounted && (
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <spotLight position={[0, 5, 5]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[5, 0, 5]} intensity={0.5} />
            <Model mousePosition={mousePosition} />
            <Environment preset="city" />
          </Canvas>
        )}
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center mt-48 md:mt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-dark to-blue-medium bg-clip-text text-transparent">
            Raj Sharma
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-gray">Full Stack Developer</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl backdrop-blur-sm bg-white/30 dark:bg-blue-dark/30 p-6 rounded-lg"
        >
          <p className="text-lg mb-6 text-blue-dark dark:text-blue-light">
            Passionate about building AI-integrated web applications and creating exceptional user experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-blue-medium p-2 hover:bg-blue-dark text-white shadow-md transition-all duration-300"
              onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-medium p-2 text-blue-dark hover:bg-blue-pale hover:text-blue-medium dark:text-blue-light dark:border-blue-light dark:hover:bg-blue-gray/20 shadow-md transition-all duration-300"
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-blue-dark hover:text-blue-medium hover:bg-blue-pale/50 dark:text-blue-light dark:hover:bg-blue-gray/20 animate-bounce"
          onClick={() => document.getElementById("experience").scrollIntoView({ behavior: "smooth" })}
        >
          <ArrowDown />
        </Button>
      </motion.div>
    </section>
  )
}
