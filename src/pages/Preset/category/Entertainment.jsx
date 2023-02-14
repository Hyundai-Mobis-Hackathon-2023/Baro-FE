import useSpline from '@splinetool/r3f-spline';

const Entertainment = () => {
  const { nodes, materials } = useSpline('https://prod.spline.design/4Jf7P01YIrL8XLeB/scene.splinecode');

  return (
    <>
      <group name='enterCar-S' position={[-3, 3, 5]} scale={0.05}>
        <group name='car' position={[0, 0, 13.28]}>
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
            name='Rectangle'
            geometry={nodes.Rectangle.geometry}
            material={materials['Rectangle Material']}
            castShadow
            receiveShadow
            position={[178.02, 27.98, 0]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            name='Rectangle 2'
            geometry={nodes['Rectangle 2'].geometry}
            material={materials['Rectangle 2 Material']}
            castShadow
            receiveShadow
            position={[0.02, 27.98, -300]}
          />
          <mesh
            name='Rectangle 3'
            geometry={nodes['Rectangle 3'].geometry}
            material={materials['Rectangle 3 Material']}
            castShadow
            receiveShadow
            position={[0.11, -189.04, 0]}
            rotation={[-Math.PI / 2, -0.01, Math.PI / 2]}
            scale={1}
          />
        </group>
        <group name='plant' position={[31.5, -68.66, -220.4]} rotation={[0, -0.61, 0]} scale={0.58}>
          <mesh
            name='Ellipse1'
            geometry={nodes.Ellipse1.geometry}
            material={materials['wood-red']}
            castShadow
            receiveShadow
            position={[18.85, -36.13, 11.14]}
            rotation={[-Math.PI / 2, 0, 2.36]}
            scale={1.42}
          />
          <mesh
            name='Merged Geometry'
            geometry={nodes['Merged Geometry'].geometry}
            material={materials['tree-3']}
            castShadow
            receiveShadow
            position={[21.97, 13.55, -14.21]}
            rotation={[0, 0.61, 0]}
            scale={1.71}
          />
          <mesh
            name='Cube 18'
            geometry={nodes['Cube 18'].geometry}
            material={materials.wood}
            castShadow
            receiveShadow
            position={[18.85, -83.45, 10.99]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group name='carpet ' position={[-42.17, -148.58, 55.72]} scale={0.22}>
          <mesh
            name='Ellipse 32'
            geometry={nodes['Ellipse 32'].geometry}
            material={materials['gray-light']}
            castShadow
            receiveShadow
            position={[1.05, 10.47, -1.05]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.02, 1.02, 1.57]}
          />
          <mesh
            name='Ellipse2'
            geometry={nodes.Ellipse2.geometry}
            material={materials['wood-3']}
            castShadow
            receiveShadow
            position={[0, -7.39, 0]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[1.09, 1.09, 1.66]}
          />
          <mesh
            name='Ellipse 21'
            geometry={nodes['Ellipse 21'].geometry}
            material={materials['wood-red-light']}
            castShadow
            receiveShadow
            position={[0, 7.48, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.02, 1.02, 1.57]}
          />
        </group>
        <group name='Group 44' position={[-106.58, -67.24, 241.44]} rotation={[-Math.PI, -0.87, -Math.PI]} scale={1}>
          <mesh
            name='Cylinder 4'
            geometry={nodes['Cylinder 4'].geometry}
            material={materials['yellow-light']}
            castShadow
            receiveShadow
            position={[2.48, -78.61, 1.11]}
            scale={1}
          />
          <mesh
            name='Merged Geometry1'
            geometry={nodes['Merged Geometry1'].geometry}
            material={materials.grey}
            castShadow
            receiveShadow
            position={[23.46, -6.63, 1.44]}
            rotation={[-Math.PI, 0.87, -Math.PI]}
            scale={1}
          />
          <mesh
            name='Cylinder 5'
            geometry={nodes['Cylinder 5'].geometry}
            material={materials.yellow}
            castShadow
            receiveShadow
            position={[-28.92, 74.08, 0]}
            rotation={[0, 0, -0.09]}
            scale={0.74}
          />
          <mesh
            name='Cylinder'
            geometry={nodes.Cylinder.geometry}
            material={materials['yellow-light']}
            castShadow
            receiveShadow
            position={[-29.77, 64.45, 0]}
            rotation={[0, 0, -0.09]}
            scale={0.74}
          />
        </group>
        <group name='cd-4' position={[131.19, -55.47, -170.1]} rotation={[-Math.PI / 2, 0, 0]} scale={0.18}>
          <mesh
            name='Cube'
            geometry={nodes.Cube.geometry}
            material={materials.black}
            castShadow
            receiveShadow
            position={[46.2, -124.61, 7.27]}
            rotation={[0, 0, -1.75]}
            scale={1.28}
          />
          <mesh
            name='Cylinder 2'
            geometry={nodes['Cylinder 2'].geometry}
            material={materials.black}
            castShadow
            receiveShadow
            position={[-89.13, -155.17, 5.27]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={1.28}
          />
          <mesh
            name='Cylinder1'
            geometry={nodes.Cylinder1.geometry}
            material={materials.black}
            castShadow
            receiveShadow
            position={[86.56, -127.47, 7.09]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={1.28}
          />
          <mesh
            name='Rectangle 21'
            geometry={nodes['Rectangle 21'].geometry}
            material={materials['wall-livingroom']}
            castShadow
            receiveShadow
            position={[4.53, -22.14, -42.46]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={1.28}
          />
          <mesh
            name='红色'
            geometry={nodes.红色.geometry}
            material={materials['pink-light']}
            castShadow
            receiveShadow
            position={[0, 0, 0]}
            rotation={[-1.94, -1.51, 2.72]}
            scale={[0.72, 0.09, 0.72]}
          />
          <mesh
            name='Cylinder2'
            geometry={nodes.Cylinder2.geometry}
            material={materials.black}
            castShadow
            receiveShadow
            position={[0, 0, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[0.72, 0.09, 0.72]}
          />
        </group>
        <group
          name='cabinet 2'
          position={[112.25, -96.87, -164.98]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.16, 0.18, 0.2]}
        >
          <mesh
            name='Merged Geometry 2'
            geometry={nodes['Merged Geometry 2'].geometry}
            material={materials['wood-red']}
            castShadow
            receiveShadow
            position={[-2.64, 12.06, 142.41]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[5.06, 5.47, 6.11]}
          />
          <mesh
            name='Merged Geometry2'
            geometry={nodes['Merged Geometry2'].geometry}
            material={materials['yellow-light']}
            castShadow
            receiveShadow
            position={[-3.3, -46.08, 131.27]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[5.06, 5.47, 6.11]}
          />
          <mesh
            name='Cube 2'
            geometry={nodes['Cube 2'].geometry}
            material={materials['wood-3']}
            castShadow
            receiveShadow
            position={[0, -49.69, -97.57]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[1, 0.88, 1]}
          />
        </group>
        <group name='Group 71' position={[117.32, -52.13, 102.25]}>
          <group name='tv' position={[-1.36, 25.8, -27.9]} scale={0.85}>
            <mesh
              name='Merged Geometry3'
              geometry={nodes['Merged Geometry3'].geometry}
              material={materials['grey-material']}
              castShadow
              receiveShadow
              position={[3.38, 52.36, 9.76]}
              scale={1.18}
            />
            <group name='Group 37' position={[-23.86, -15.89, 48.61]}>
              <mesh
                name='Merged Geometry4'
                geometry={nodes['Merged Geometry4'].geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[0.36, -16.36, -0.2]}
              />
              <mesh
                name='Cylinder 21'
                geometry={nodes['Cylinder 21'].geometry}
                material={materials['grey-material']}
                castShadow
                receiveShadow
                position={[0.52, 4.76, 5.08]}
                rotation={[-2.62, 0, -Math.PI / 2]}
                scale={0.86}
              />
              <mesh
                name='Cylinder3'
                geometry={nodes.Cylinder3.geometry}
                material={materials['grey-material']}
                castShadow
                receiveShadow
                position={[0.52, 19.77, 5.08]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}
                scale={0.86}
              />
              <mesh
                name='Cube 61'
                geometry={nodes['Cube 61'].geometry}
                material={materials['wood-red']}
                castShadow
                receiveShadow
                position={[2, 0, -0.02]}
                rotation={[0, -Math.PI / 2, 0]}
              />
            </group>
            <mesh
              name='Cube 62'
              geometry={nodes['Cube 62'].geometry}
              material={materials['grey-material']}
              castShadow
              receiveShadow
              position={[-19.33, -63.01, -1.68]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            <mesh
              name='Cube 60'
              geometry={nodes['Cube 60'].geometry}
              material={materials['orange-1']}
              castShadow
              receiveShadow
              position={[8.37, -28.09, -0.92]}
            />
            <mesh
              name='Cube 59'
              geometry={nodes['Cube 59'].geometry}
              material={materials['wood-red']}
              castShadow
              receiveShadow
              position={[8.37, -27.85, -0.89]}
            />
            <mesh
              name='Cube 58'
              geometry={nodes['Cube 58'].geometry}
              material={materials['grey-material']}
              castShadow
              receiveShadow
              position={[8.37, -27.85, -0.89]}
            />
          </group>
          <group name='table-tv' position={[0, -70.39, 0]}>
            <mesh
              name='Merged Geometry5'
              geometry={nodes['Merged Geometry5'].geometry}
              material={materials['wood-red-light']}
              castShadow
              receiveShadow
            />
            <mesh
              name='Cube 601'
              geometry={nodes['Cube 601'].geometry}
              material={materials['wall-livingroom']}
              castShadow
              receiveShadow
              position={[-49.23, -1.96, 86.51]}
            />
          </group>
          <group name='Group 70' position={[2.64, -27.64, 128.29]}>
            <mesh
              name='Ellipse 22'
              geometry={nodes['Ellipse 22'].geometry}
              material={materials.grey}
              castShadow
              receiveShadow
              position={[-19.4, -8.51, -0.92]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            />
            <mesh
              name='Ellipse3'
              geometry={nodes.Ellipse3.geometry}
              material={materials.grey}
              castShadow
              receiveShadow
              position={[-19.4, 1.25, -0.92]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            />
            <mesh
              name='Cylinder 14'
              geometry={nodes['Cylinder 14'].geometry}
              material={materials['yellow-light']}
              castShadow
              receiveShadow
              position={[-17.95, -3.86, 14.8]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1, 0.1, 1]}
            />
            <mesh
              name='Cylinder 13'
              geometry={nodes['Cylinder 13'].geometry}
              material={materials['gray-light']}
              castShadow
              receiveShadow
              position={[-17.95, -3.86, -15.96]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1, 0.1, 1]}
            />
            <mesh
              name='Merged Geometry 21'
              geometry={nodes['Merged Geometry 21'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[-10.96, 9.68, -0.32]}
            />
            <mesh
              name='Cube 621'
              geometry={nodes['Cube 621'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[5.71, -4.02, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              name='Cube 611'
              geometry={nodes['Cube 611'].geometry}
              material={materials['yellow-light']}
              castShadow
              receiveShadow
              position={[5.9, 2.01, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
          </group>
        </group>
        <group name='Group 29' position={[-86.5, -93.16, -171.34]} rotation={[0, -1.13, 0]} scale={0.75}>
          <mesh
            name='Merged Geometry6'
            geometry={nodes['Merged Geometry6'].geometry}
            material={materials['wood-red']}
            castShadow
            receiveShadow
            position={[-3.38, -10.75, 1.12]}
            rotation={[0, 1.13, 0]}
            scale={1.34}
          />
          <mesh
            name='Cube 63'
            geometry={nodes['Cube 63'].geometry}
            material={materials.purple}
            castShadow
            receiveShadow
            position={[-35.5, 33.58, -0.44]}
            rotation={[-Math.PI / 2, 1.13, -Math.PI / 2]}
            scale={[1.31, 0.81, 0.94]}
          />
          <mesh
            name='Cube 602'
            geometry={nodes['Cube 602'].geometry}
            material={materials.purple}
            castShadow
            receiveShadow
            position={[30.78, -13.7, -0.42]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[1.31, 0.81, 1.37]}
          />
        </group>
      </group>
      <directionalLight
        name='Directional Light'
        castShadow
        intensity={0.7}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={-10000}
        shadow-camera-far={100000}
        shadow-camera-left={-500}
        shadow-camera-right={500}
        shadow-camera-top={500}
        shadow-camera-bottom={-500}
        position={[200, 300, 300]}
      />
    </>
  );
};

export default Entertainment;
