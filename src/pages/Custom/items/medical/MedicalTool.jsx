import useSpline from '@splinetool/r3f-spline';

const MedicalTool = ({ position }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/EoVUOJw3PE4Ycgnm/scene.splinecode');
  return (
    <>
      <group name='MedicalTool' position={position} scale={0.05}>
        <group name='resize' position={[0, -15, 0]}>
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
      </group>
    </>
  );
};

export default MedicalTool;
