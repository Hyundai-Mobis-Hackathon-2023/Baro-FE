import useSpline from '@splinetool/r3f-spline';

const Medical = () => {
  const { nodes, materials } = useSpline('https://prod.spline.design/V8HENS5RNLdY6Tcb/scene.splinecode');
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
      <group name='medicalCar-S' position={[-3, 3, 5]} scale={0.05}>
        <group name='object_syringe' position={[10.47, 53.09, 8.5]} scale={0.3}>
          <mesh
            name='baseliquid'
            geometry={nodes.baseliquid.geometry}
            material={materials.Untitled}
            castShadow
            receiveShadow
            position={[-32.05, -43.55, -11.31]}
            rotation={[-1.09, 0.64, -0.3]}
            scale={0.67}
          />
          <mesh
            name='drop2'
            geometry={nodes.drop2.geometry}
            material={materials.syrringe}
            castShadow
            receiveShadow
            position={[178.75, 111.37, 124.13]}
            scale={0.6}
          />
          <mesh
            name='drop1'
            geometry={nodes.drop1.geometry}
            material={materials.syrringe}
            castShadow
            receiveShadow
            position={[178.75, 212.55, 124.13]}
            scale={0.39}
          />
          <mesh
            name='needle'
            geometry={nodes.needle.geometry}
            material={materials.Untitled}
            castShadow
            receiveShadow
            position={[87.57, 115.2, 64.83]}
            rotation={[0.01, -0.56, -0.73]}
            scale={0.75}
          />
          <mesh
            name='needlebase'
            geometry={nodes.needlebase.geometry}
            material={materials.Untitled}
            castShadow
            receiveShadow
            position={[81.4, 106.08, 60.92]}
            rotation={[0.01, -0.56, -0.73]}
            scale={[0.36, 0.1, 0.36]}
          />
          <group name='basepiece' position={[-109.56, -159.24, -56.91]}>
            <mesh
              name='Cylinder 4'
              geometry={nodes['Cylinder 4'].geometry}
              material={materials.Untitled}
              castShadow
              receiveShadow
              position={[-20.93, -12.22, -17.49]}
              rotation={[0.01, -0.56, 2.41]}
              scale={[0.29, 0.17, 0.29]}
            />
            <mesh
              name='Cylinder 5'
              geometry={nodes['Cylinder 5'].geometry}
              material={materials.Untitled}
              castShadow
              receiveShadow
              position={[-49.82, -50.07, -35.95]}
              rotation={[0.01, -0.56, 2.41]}
              scale={[0.57, 0.01, 0.57]}
            />
            <mesh
              name='base'
              geometry={nodes.base.geometry}
              material={materials.Untitled}
              castShadow
              receiveShadow
              position={[6.46, 23.66, 0]}
              rotation={[0.01, -0.56, 2.41]}
              scale={[1.1, 0.03, 1.1]}
            />
          </group>
          <mesh
            name='syringe'
            geometry={nodes.syringe.geometry}
            material={materials.syrringe}
            castShadow
            receiveShadow
            position={[-13.73, -18.52, 0.16]}
            rotation={[0.01, -0.56, -0.73]}
            scale={0.75}
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
        <group name='Group 77' position={[-127.49, -67.24, 225.03]} rotation={[-Math.PI, -0.35, -Math.PI]} scale={1}>
          <mesh
            name='Cylinder 41'
            geometry={nodes['Cylinder 41'].geometry}
            material={materials['Cylinder 41 Material']}
            castShadow
            receiveShadow
            position={[2.48, -78.61, 1.11]}
            scale={1}
          />
          <mesh
            name='Merged Geometry'
            geometry={nodes['Merged Geometry'].geometry}
            material={materials.grey}
            castShadow
            receiveShadow
            position={[23.46, -6.63, 1.44]}
            rotation={[-Math.PI, 0.87, -Math.PI]}
            scale={1}
          />
          <mesh
            name='Cylinder 51'
            geometry={nodes['Cylinder 51'].geometry}
            material={materials['Cylinder 51 Material']}
            castShadow
            receiveShadow
            position={[-28.92, 74.08, 0]}
            rotation={[0, 0, -0.09]}
            scale={0.74}
          />
          <mesh
            name='Cylinder'
            geometry={nodes.Cylinder.geometry}
            material={materials['Cylinder Material']}
            castShadow
            receiveShadow
            position={[-29.77, 64.45, 0]}
            rotation={[0, 0, -0.09]}
            scale={0.74}
          />
        </group>
        <group name='table-1' position={[82.65, -73.92, 231.92]} rotation={[0, -Math.PI / 2, 0]}>
          <group name='books' position={[-3.18, 33.59, -4.76]}>
            <mesh
              name='book-1 2'
              geometry={nodes['book-1 2'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[-9.38, 30.33, 32.4]}
              rotation={[-Math.PI / 2, 0, -1.46]}
              scale={0.25}
            />
            <mesh
              name='book-3'
              geometry={nodes['book-3'].geometry}
              material={materials['book-3 Material']}
              castShadow
              receiveShadow
              position={[-10.76, 22.66, 31.84]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={0.25}
            />
            <mesh
              name='book-4 2'
              geometry={nodes['book-4 2'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[-10.86, 17.52, 31.68]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={0.25}
            />
            <mesh
              name='book-4'
              geometry={nodes['book-4'].geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[-7.15, 38.27, 28.72]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={0.25}
            />
            <mesh
              name='Cube 7'
              geometry={nodes['Cube 7'].geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[-8.7, -24.84, 13.33]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={0.23}
            />
            <mesh
              name='Cube 3'
              geometry={nodes['Cube 3'].geometry}
              material={materials['Cube 3 Material']}
              castShadow
              receiveShadow
              position={[-9.44, -33.57, 12.83]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={0.23}
            />
            <mesh
              name='Cube 6'
              geometry={nodes['Cube 6'].geometry}
              material={materials['blue-1-3']}
              castShadow
              receiveShadow
              position={[-12.76, -39.11, 14.91]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={0.23}
            />
            <mesh
              name='Cube 8'
              geometry={nodes['Cube 8'].geometry}
              material={materials['tree-3']}
              castShadow
              receiveShadow
              position={[-12.55, -24.52, -19.82]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.23}
            />
            <mesh
              name='Cube 5'
              geometry={nodes['Cube 5'].geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[-15.94, -24.52, -11.14]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.23}
            />
            <mesh
              name='Cube 4'
              geometry={nodes['Cube 4'].geometry}
              material={materials['Cube 4 Material']}
              castShadow
              receiveShadow
              position={[-10.08, -22.92, -26.93]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.23}
            />
            <mesh
              name='Cube 2'
              geometry={nodes['Cube 2'].geometry}
              material={materials['blue-1-3']}
              castShadow
              receiveShadow
              position={[-12.55, -27.15, -33.43]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.23}
            />
            <mesh
              name='Cube'
              geometry={nodes.Cube.geometry}
              material={materials['blue-1-3']}
              castShadow
              receiveShadow
              position={[-14.29, -21.97, -41.63]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.23}
            />
            <mesh
              name='Rectangle 5'
              geometry={nodes['Rectangle 5'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[10.46, 15.92, -24.49]}
              rotation={[-Math.PI / 2, 0, -1.95]}
              scale={0.22}
            />
            <mesh
              name='Rectangle 4'
              geometry={nodes['Rectangle 4'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[1.51, 15.36, -21.86]}
              rotation={[-Math.PI / 2, 0, -2.27]}
              scale={0.22}
            />
            <mesh
              name='book-1'
              geometry={nodes['book-1'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[8.6, 27, -31.04]}
              rotation={[-Math.PI / 2, 0, -1.66]}
              scale={0.22}
            />
            <mesh
              name='book-31'
              geometry={nodes['book-31'].geometry}
              material={materials['book-31 Material']}
              castShadow
              receiveShadow
              position={[7.77, 19.82, -28.42]}
              rotation={[-Math.PI / 2, 0, -1.83]}
              scale={0.22}
            />
          </group>
          <group name='desk' position={[4.37, -2.47, 2.29]} scale={0.28}>
            <mesh
              name='Cube 18'
              geometry={nodes['Cube 18'].geometry}
              material={materials['Cube 18 Material']}
              castShadow
              receiveShadow
              position={[129.87, -9.93, -230.31]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={[1.09, 1.5, 1]}
            />
            <mesh
              name='Cube 16'
              geometry={nodes['Cube 16'].geometry}
              material={materials['Cube 16 Material']}
              castShadow
              receiveShadow
              position={[129.87, -9.93, 211.31]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={[1.09, 1.75, 1]}
            />
            <mesh
              name='Cube 181'
              geometry={nodes['Cube 181'].geometry}
              material={materials['Cube 181 Material']}
              castShadow
              receiveShadow
              position={[-2.46, 224.41, -230.31]}
              rotation={[Math.PI / 2, 0, Math.PI]}
              scale={[1.07, 0.93, 0.95]}
            />
            <mesh
              name='Cube 17'
              geometry={nodes['Cube 17'].geometry}
              material={materials['Cube 17 Material']}
              castShadow
              receiveShadow
              position={[-2.46, 224.41, 211.31]}
              rotation={[Math.PI / 2, 0, Math.PI]}
              scale={[1.07, 0.93, 0.95]}
            />
            <mesh
              name='Cube 182'
              geometry={nodes['Cube 182'].geometry}
              material={materials['Cube 182 Material']}
              castShadow
              receiveShadow
              position={[-129.87, -9.93, -230.31]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={[1.09, 1.5, 1]}
            />
            <mesh
              name='Cube 13'
              geometry={nodes['Cube 13'].geometry}
              material={materials['Cube 13 Material']}
              castShadow
              receiveShadow
              position={[-129.87, -9.93, 211.31]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={[1.09, 1.75, 1]}
            />
            <mesh
              name='Cube 15'
              geometry={nodes['Cube 15'].geometry}
              material={materials['Cube 15 Material']}
              castShadow
              receiveShadow
              position={[1.56, -230.03, -13.49]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.97, 1, 1]}
            />
            <mesh
              name='Cube 14'
              geometry={nodes['Cube 14'].geometry}
              material={materials['Cube 14 Material']}
              castShadow
              receiveShadow
              position={[1.56, -28.42, -13.49]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.97, 1, 1]}
            />
            <mesh
              name='Cube 12'
              geometry={nodes['Cube 12'].geometry}
              material={materials['Cube 12 Material']}
              castShadow
              receiveShadow
              position={[1.56, 172.83, -13.49]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.97, 1, 1]}
            />
          </group>
          <group
            name='box 2'
            position={[-3.61, -47.66, 16.71]}
            rotation={[-Math.PI, -0.04, -Math.PI]}
            scale={[0.33, 0.3, 0.33]}
          >
            <mesh
              name='Rectangle 9'
              geometry={nodes['Rectangle 9'].geometry}
              material={materials['Rectangle 9 Material']}
              castShadow
              receiveShadow
              position={[57.6, -29.15, -12]}
              rotation={[0, Math.PI / 2, 0]}
              scale={1}
            />
            <mesh
              name='Cube1'
              geometry={nodes.Cube1.geometry}
              material={materials['Cube1 Material']}
              castShadow
              receiveShadow
              position={[-0.69, -0.53, -1.41]}
              scale={0.78}
            />
          </group>
        </group>
        <group name='lamp' position={[151.86, -62.47, -109.68]} rotation={[0, -1.44, 0]} scale={0.18}>
          <group name='computer' position={[-233.67, 551.1, 42.67]} rotation={[-Math.PI, 1.3, -Math.PI]} scale={5.42}>
            <mesh
              name='Merged Geometry 10'
              geometry={nodes['Merged Geometry 10'].geometry}
              material={materials.black}
              castShadow
              receiveShadow
            />
            <mesh
              name='Cube2'
              geometry={nodes.Cube2.geometry}
              material={materials['Cube2 Material']}
              castShadow
              receiveShadow
              position={[-7.18, 5.56, 0]}
              scale={[1, 1.08, 1]}
            />
          </group>
          <mesh
            name='Cube 51'
            geometry={nodes['Cube 51'].geometry}
            material={materials.black}
            castShadow
            receiveShadow
            position={[37.09, -270.06, 5.4]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={1.53}
          />
          <mesh
            name='Cylinder1'
            geometry={nodes.Cylinder1.geometry}
            material={materials.black}
            castShadow
            receiveShadow
            position={[45.52, -462.67, 0]}
            rotation={[0, 0, 0]}
            scale={1.53}
          />
        </group>
        <group name='bed 2' position={[-37.28, -88.86, -54.08]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            name='Cube 70'
            geometry={nodes['Cube 70'].geometry}
            material={materials['Cube 70 Material']}
            castShadow
            receiveShadow
            position={[-141.88, 23.18, 63.51]}
            rotation={[-2.08, -1.07, -0.56]}
            scale={1.08}
          />
          <mesh
            name='Cube 69'
            geometry={nodes['Cube 69'].geometry}
            material={materials['Cube 69 Material']}
            castShadow
            receiveShadow
            position={[-135.21, 26.93, -54.39]}
            rotation={[-Math.PI / 2, -1.13, 0]}
            scale={1.08}
          />
          <mesh
            name='Cube 68'
            geometry={nodes['Cube 68'].geometry}
            material={materials['Cube 68 Material']}
            castShadow
            receiveShadow
            position={[-172.28, 21.84, 44.78]}
            rotation={[-Math.PI / 2, -0.61, 0]}
            scale={1.08}
          />
          <mesh
            name='Cube 67'
            geometry={nodes['Cube 67'].geometry}
            material={materials['Cube 67 Material']}
            castShadow
            receiveShadow
            position={[-172.28, 21.84, -62.81]}
            rotation={[-Math.PI / 2, -0.61, 0]}
            scale={1.08}
          />
          <mesh
            name='Cube 65'
            geometry={nodes['Cube 65'].geometry}
            material={materials['Cube 65 Material']}
            castShadow
            receiveShadow
            position={[-209.67, -0.68, -4.75]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
          <mesh
            name='Cube 64'
            geometry={nodes['Cube 64'].geometry}
            material={materials['Cube 64 Material']}
            castShadow
            receiveShadow
            position={[62.36, -22.43, 1.2]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={1}
          />
          <mesh
            name='Cube 63'
            geometry={nodes['Cube 63'].geometry}
            material={materials.white}
            castShadow
            receiveShadow
            position={[14.35, -30.32, -0.27]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={1}
          />
        </group>
      </group>
    </>
  );
};

export default Medical;
