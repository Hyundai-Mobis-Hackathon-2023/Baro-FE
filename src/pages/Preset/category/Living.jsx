import useSpline from '@splinetool/r3f-spline';

const Living = () => {
  const { nodes, materials } = useSpline('https://prod.spline.design/GjMacrlDMbWK5Oz6/scene.splinecode');

  return (
    <>
      <directionalLight
        name='Directional Light'
        castShadow
        intensity={0.62}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={-10000}
        shadow-camera-far={100000}
        shadow-camera-left={-40}
        shadow-camera-right={40}
        shadow-camera-top={40}
        shadow-camera-bottom={-500}
        position={[-1091.88, 300, 300]}
      />
      <group name='livingCar' position={[-3, 3, 5]} scale={0.05}>
        <group name='Group 75' position={[-4.85, -147.88, 14.6]}>
          <mesh
            name='Merged Geometry 14'
            geometry={nodes['Merged Geometry 14'].geometry}
            material={materials['purple-light']}
            castShadow
            receiveShadow
            position={[-48.62, 2.26, 85.28]}
          />
          <mesh
            name='Merged Geometry 15'
            geometry={nodes['Merged Geometry 15'].geometry}
            material={materials.grey}
            castShadow
            receiveShadow
            position={[-48.62, -0.02, 0.1]}
          />
          <mesh
            name='Merged Geometry 13'
            geometry={nodes['Merged Geometry 13'].geometry}
            material={materials['Merged Geometry 13 Material']}
            castShadow
            receiveShadow
            position={[-0.77, 2.27, 27.79]}
          />
          <mesh
            name='Merged Geometry 12'
            geometry={nodes['Merged Geometry 12'].geometry}
            material={materials['Untitled Material']}
            castShadow
            receiveShadow
            position={[0.22, 2.27, 0.41]}
          />
          <mesh
            name='Merged Geometry 11'
            geometry={nodes['Merged Geometry 11'].geometry}
            material={materials.black}
            castShadow
            receiveShadow
            position={[32.21, 2.27, -29.61]}
          />
          <mesh
            name='Merged Geometry 10'
            geometry={nodes['Merged Geometry 10'].geometry}
            material={materials.pink}
            castShadow
            receiveShadow
            position={[0.07, 2.27, 1.77]}
          />
          <mesh
            name='Rectangle 17'
            geometry={nodes['Rectangle 17'].geometry}
            material={materials['gray-light']}
            castShadow
            receiveShadow
            position={[112.81, -2.29, 0.1]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={1}
          />
          <mesh
            name='Rectangle 16'
            geometry={nodes['Rectangle 16'].geometry}
            material={materials['Untitled Material']}
            castShadow
            receiveShadow
            position={[1.17, -2.29, 0.1]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={1}
          />
        </group>
        <group name='lamp' position={[109.47, -55.47, 250.65]} rotation={[0, -0.26, 0]} scale={0.18}>
          <mesh
            name='Sphere'
            geometry={nodes.Sphere.geometry}
            material={materials['Untitled Material']}
            castShadow
            receiveShadow
            position={[-53.25, 403.22, 1.25]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={1}
          />
          <mesh
            name='Cube 5'
            geometry={nodes['Cube 5'].geometry}
            material={materials.black}
            castShadow
            receiveShadow
            position={[37.09, -270.06, 5.4]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={1.53}
          />
          <mesh
            name='Cylinder 2'
            geometry={nodes['Cylinder 2'].geometry}
            material={materials.black}
            castShadow
            receiveShadow
            position={[-54.23, 325.3, 0.88]}
            rotation={[0, 0, 0]}
            scale={1.53}
          />
          <mesh
            name='Cylinder'
            geometry={nodes.Cylinder.geometry}
            material={materials.black}
            castShadow
            receiveShadow
            position={[45.52, -462.67, 0]}
            rotation={[0, 0, 0]}
            scale={1.53}
          />
        </group>
        <group name='Group 72' position={[-91.11, -131.94, -0.52]}>
          <mesh
            name='Cube 74'
            geometry={nodes['Cube 74'].geometry}
            material={materials.yellow}
            castShadow
            receiveShadow
            position={[23.68, 0, -48.57]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
          <mesh
            name='Cube 73'
            geometry={nodes['Cube 73'].geometry}
            material={materials['wall-livingroom']}
            castShadow
            receiveShadow
            position={[-23.6, 0, 48.55]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
        </group>
        <group
          name='books-10'
          position={[-39.79, -124.9, 256.41]}
          rotation={[-0.1, 1.13, 0.09]}
          scale={[0.26, 0.41, 0.26]}
        >
          <mesh
            name='Rectangle 3'
            geometry={nodes['Rectangle 3'].geometry}
            material={materials['blue-ish']}
            castShadow
            receiveShadow
            position={[186.69, -11.12, -76.86]}
            rotation={[-1.54, -0.04, -1.3]}
            scale={1}
          />
          <mesh
            name='Rectangle 2'
            geometry={nodes['Rectangle 2'].geometry}
            material={materials['blue-1-3']}
            castShadow
            receiveShadow
            position={[238.77, -9.15, -91.01]}
            rotation={[-1.54, -0.04, -1.3]}
            scale={1}
          />
          <mesh
            name='Rectangle'
            geometry={nodes.Rectangle.geometry}
            material={materials['orange-1']}
            castShadow
            receiveShadow
            position={[224.79, -9.96, -87.22]}
            rotation={[-1.54, -0.04, -1.3]}
            scale={1}
          />
          <mesh
            name='Cube'
            geometry={nodes.Cube.geometry}
            material={materials['blue-1-3']}
            castShadow
            receiveShadow
            position={[225.56, -15.45, -87.17]}
            rotation={[-1.54, -0.04, -1.3]}
            scale={1}
          />
          <mesh
            name='红色'
            geometry={nodes.红色.geometry}
            material={materials['orange-1']}
            castShadow
            receiveShadow
            position={[188.61, -31.5, 27.93]}
            rotation={[0.02, -1.3, 0.01]}
            scale={[0.72, 0.09, 0.72]}
          />
          <mesh
            name='Cylinder1'
            geometry={nodes.Cylinder1.geometry}
            material={materials.black}
            castShadow
            receiveShadow
            position={[188.61, -31.5, 27.93]}
            rotation={[0.02, -1.3, 0.01]}
            scale={[0.72, 0.09, 0.72]}
          />
          <mesh
            name='paper 2'
            geometry={nodes['paper 2'].geometry}
            material={materials['pink-light']}
            castShadow
            receiveShadow
            position={[63.14, -38.35, 49.92]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={1}
          />
          <mesh
            name='paper 3'
            geometry={nodes['paper 3'].geometry}
            material={materials.white}
            castShadow
            receiveShadow
            position={[743.72, -52.5, -488.27]}
            rotation={[-Math.PI / 2, 0, -2.32]}
            scale={1}
          />
          <mesh
            name='paper'
            geometry={nodes.paper.geometry}
            material={materials.white}
            castShadow
            receiveShadow
            position={[52.37, -37.54, 100.71]}
            rotation={[-Math.PI / 2, 0, -1.83]}
            scale={1}
          />
        </group>
        <group name='Group 71' position={[44.61, -84.41, 51.01]}>
          <group name='flower' position={[-12.08, 23.72, 0.18]}>
            <mesh
              name='Cylinder 12'
              geometry={nodes['Cylinder 12'].geometry}
              material={materials['blue-2']}
              castShadow
              receiveShadow
              position={[2.54, -23.32, 0.22]}
              scale={0.42}
            />
            <mesh
              name='Cylinder 11'
              geometry={nodes['Cylinder 11'].geometry}
              material={materials['pink-light']}
              castShadow
              receiveShadow
              position={[-0.49, 21.97, -2.67]}
              rotation={[-2.76, 0.79, 2.43]}
              scale={0.19}
            />
            <mesh
              name='Cylinder 10'
              geometry={nodes['Cylinder 10'].geometry}
              material={materials['pink-light']}
              castShadow
              receiveShadow
              position={[3.08, 22.87, -0.84]}
              rotation={[2.95, 0.28, -2.92]}
              scale={0.19}
            />
            <mesh
              name='Cylinder 9'
              geometry={nodes['Cylinder 9'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[1.49, 2.91, -1.82]}
              rotation={[-Math.PI, 0.32, -Math.PI]}
              scale={0.12}
            />
          </group>
          <group name='Group 49' position={[0, -35.12, 0]} scale={0.77}>
            <mesh
              name='Cylinder2'
              geometry={nodes.Cylinder2.geometry}
              material={materials['wood-red-light']}
              castShadow
              receiveShadow
              position={[0, 26.09, 0]}
            />
            <mesh
              name='Merged Geometry'
              geometry={nodes['Merged Geometry'].geometry}
              material={materials['wood-red-light']}
              castShadow
              receiveShadow
              position={[0, -4.81, 1.12]}
              scale={1.3}
            />
          </group>
        </group>
        <group
          name='Group 41'
          position={[-15.4, -102.47, -223.21]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.66, 0.71, 0.71]}
        >
          <mesh
            name='Cube 63'
            geometry={nodes['Cube 63'].geometry}
            material={materials['Untitled Material']}
            castShadow
            receiveShadow
            position={[-44.03, 9.64, 68.26]}
            rotation={[-Math.PI / 2, 1.13, -Math.PI / 2]}
            scale={[1.42, 0.81, 0.94]}
          />
          <mesh
            name='Cube 631'
            geometry={nodes['Cube 631'].geometry}
            material={materials['Untitled Material']}
            castShadow
            receiveShadow
            position={[-44.03, 9.64, -67.03]}
            rotation={[-Math.PI / 2, 1.13, -Math.PI / 2]}
            scale={[1.42, 0.81, 0.94]}
          />
          <mesh
            name='Cube 66'
            geometry={nodes['Cube 66'].geometry}
            material={materials['Untitled Material']}
            castShadow
            receiveShadow
            position={[-53.31, -28.69, -1.24]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={[1.17, 0.81, 1.37]}
          />
          <mesh
            name='Cube 67'
            geometry={nodes['Cube 67'].geometry}
            material={materials['Untitled Material']}
            castShadow
            receiveShadow
            position={[9.19, -18.23, -147.01]}
            rotation={[Math.PI, 0, -Math.PI / 2]}
            scale={[1.17, 0.81, 1.37]}
          />
          <mesh
            name='Cube 65'
            geometry={nodes['Cube 65'].geometry}
            material={materials['Untitled Material']}
            castShadow
            receiveShadow
            position={[9.19, -18.23, 144.64]}
            rotation={[Math.PI, 0, -Math.PI / 2]}
            scale={[1.17, 0.81, 1.37]}
          />
          <mesh
            name='Cube 64'
            geometry={nodes['Cube 64'].geometry}
            material={materials['Untitled Material']}
            castShadow
            receiveShadow
            position={[23.91, -51, -1.91]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[1.17, 0.81, 1.37]}
          />
          <mesh
            name='Cube 60'
            geometry={nodes['Cube 60'].geometry}
            material={materials['Untitled Material']}
            castShadow
            receiveShadow
            position={[23.91, -26.12, 68.26]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[1.42, 0.81, 1.37]}
          />
          <mesh
            name='Cube 59'
            geometry={nodes['Cube 59'].geometry}
            material={materials['Untitled Material']}
            castShadow
            receiveShadow
            position={[23.91, -26.12, -67.03]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[1.42, 0.81, 1.37]}
          />
        </group>
        <group name='car'>
          <mesh
            name='Ellipse 3'
            geometry={nodes['Ellipse 3'].geometry}
            material={materials['Ellipse 3 Material']}
            castShadow
            receiveShadow
            position={[143.39, -190.48, 202.11]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          />
          <mesh
            name='Ellipse 31'
            geometry={nodes['Ellipse 31'].geometry}
            material={materials['Ellipse 31 Material']}
            castShadow
            receiveShadow
            position={[-135.98, -190.48, 202.11]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          />
          <mesh
            name='Ellipse 2'
            geometry={nodes['Ellipse 2'].geometry}
            material={materials['Ellipse 2 Material']}
            castShadow
            receiveShadow
            position={[143.39, -190.48, -207.38]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          />
          <mesh
            name='Ellipse'
            geometry={nodes.Ellipse.geometry}
            material={materials['Ellipse Material']}
            castShadow
            receiveShadow
            position={[-135.98, -190.48, -207.38]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          />
          <mesh
            name='Rectangle1'
            geometry={nodes.Rectangle1.geometry}
            material={materials['Rectangle1 Material']}
            castShadow
            receiveShadow
            position={[178.02, 27.98, 0]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            name='Rectangle 21'
            geometry={nodes['Rectangle 21'].geometry}
            material={materials['Rectangle 21 Material']}
            castShadow
            receiveShadow
            position={[0.02, 27.98, -300]}
          />
          <mesh
            name='Rectangle 31'
            geometry={nodes['Rectangle 31'].geometry}
            material={materials['Rectangle 31 Material']}
            castShadow
            receiveShadow
            position={[0.11, -189.04, 0]}
            rotation={[-Math.PI / 2, -0.01, Math.PI / 2]}
            scale={1}
          />
        </group>
      </group>
    </>
  );
};

export default Living;
