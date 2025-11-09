import { useEffect, useRef } from "react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";

export default function VantaBackground() {
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);

    useEffect(() => {
        console.log("Initialisation Vanta...");

        if (!vantaEffect.current && vantaRef.current) {
            try {
                vantaEffect.current = HALO({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    baseColor: 0x8a2be2,
                    backgroundColor: 0x0a0a0a,
                    amplitudeFactor: 1.0,
                    xOffset: 0.15,
                    yOffset: 0.05,
                    size: 1.5
                });
                console.log("Vanta initialisé avec succès");
            } catch (error) {
                console.error("Erreur Vanta:", error);
            }
        }

        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };
    }, []);

    return (
        <div
            ref={vantaRef}
            style={{
                width: "100vw",
                height: "100vh",
                position: "fixed",
                bottom: 0,
                left: 0,
                zIndex: 0,
            }}
        />
    );
}