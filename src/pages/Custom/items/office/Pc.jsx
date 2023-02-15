import useSpline from '@splinetool/r3f-spline';

const Pc = ({ position }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/h2TdzTjA4xfOdvGO/scene.splinecode');

  return (
    <>
      <group name='PC' position={position} scale={0.03}>
        <group name='resize' position={[0, -45, 0]}>
          <group name='computer' position={[47.32, 53.15, 19.05]}>
            <mesh
              name='Merged Geometry 10'
              geometry={nodes['Merged Geometry 10'].geometry}
              material={materials.black}
              castShadow
              receiveShadow
            />
            <mesh
              name='Cube 59'
              geometry={nodes['Cube 59'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[-7.18, 5.56, 0]}
              scale={[1, 1.08, 1]}
            />
          </group>
          <group name='Group 16' position={[-37.38, -37.34, 69.89]} scale={0.87}>
            <group name='computer-2' position={[27.47, -28.29, 41.35]} scale={0.28}>
              <mesh
                name='Rectangle'
                geometry={nodes.Rectangle.geometry}
                material={materials['blue-1-3']}
                castShadow
                receiveShadow
                position={[-121.92, -118.66, -4.31]}
                rotation={[0, -Math.PI / 2, 0]}
              />
              <mesh
                name='Ellipse 2'
                geometry={nodes['Ellipse 2'].geometry}
                material={materials['blue-1-3']}
                castShadow
                receiveShadow
                position={[-121.91, 128.14, 48.08]}
                rotation={[0, -Math.PI / 2, 0]}
              />
              <mesh
                name='Cube 5'
                geometry={nodes['Cube 5'].geometry}
                material={materials['Cube 5 Material']}
                castShadow
                receiveShadow
                position={[0.42, 0, 0]}
                rotation={[0, -Math.PI / 2, 0]}
              />
            </group>
          </group>
          <group name='computer-21' position={[-20.56, 15.24, -115.85]} rotation={[0, -Math.PI / 3, 0]} scale={0.24}>
            <group name='Group 13' position={[-1.33, 132.1, -74.92]} rotation={[-0.17, 0, 0]} scale={0.9}>
              <mesh
                name='Rectangle 8'
                geometry={nodes['Rectangle 8'].geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[64.32, 0.67, -4.24]}
                scale={0.37}
              />
              <mesh
                name='Merged Geometry 2'
                geometry={nodes['Merged Geometry 2'].geometry}
                material={materials['blue-1-3']}
                castShadow
                receiveShadow
                position={[-0.03, 0.07, -5.99]}
                rotation={[0.17, Math.PI / 3, 0]}
                scale={4.74}
              />
              <mesh
                name='Merged Geometry'
                geometry={nodes['Merged Geometry'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0.61, 2.75, -8.58]}
                rotation={[0.17, Math.PI / 3, 0]}
                scale={4.74}
              />
            </group>
            <group name='Group' position={[-1.33, 89.68, -11.15]} rotation={[0, 0.67, 0]} scale={1}>
              <mesh
                name='Rectangle 6'
                geometry={nodes['Rectangle 6'].geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[50.14, 44.57, -63.04]}
                rotation={[-0.22, -0.66, -1.71]}
                scale={0.84}
              />
              <mesh
                name='Rectangle 61'
                geometry={nodes['Rectangle 61'].geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[51.33, 45.04, -64.53]}
                rotation={[-0.22, -0.66, -1.71]}
                scale={0.84}
              />
              <mesh
                name='Rectangle 5'
                geometry={nodes['Rectangle 5'].geometry}
                material={materials['Rectangle 5 Material']}
                castShadow
                receiveShadow
                position={[4.42, -66.89, -6.25]}
                rotation={[-1.22, -0.27, -2.19]}
                scale={0.84}
              />
              <mesh
                name='Rectangle 4'
                geometry={nodes['Rectangle 4'].geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[-9.76, -82.25, 11.61]}
                rotation={[-1.22, -0.27, -2.19]}
                scale={0.84}
              />
              <mesh
                name='Cube 7'
                geometry={nodes['Cube 7'].geometry}
                material={materials['Cube 7 Material']}
                castShadow
                receiveShadow
                position={[-58.97, -92.67, -139.61]}
                rotation={[-Math.PI, 0.67, -Math.PI / 2]}
                scale={1}
              />
            </group>
            <mesh
              name='Cube 71'
              geometry={nodes['Cube 71'].geometry}
              material={materials['Cube 71 Material']}
              castShadow
              receiveShadow
              position={[-139.98, -2.99, -81.82]}
              rotation={[-Math.PI, 0, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name='Cube 6'
              geometry={nodes['Cube 6'].geometry}
              material={materials['Cube 6 Material']}
              castShadow
              receiveShadow
              position={[139.49, -2.99, -83.54]}
              rotation={[-Math.PI, 0, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name='Cube 72'
              geometry={nodes['Cube 72'].geometry}
              material={materials['Cube 72 Material']}
              castShadow
              receiveShadow
              position={[-139.92, -46.3, -3.35]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name='Cube 51'
              geometry={nodes['Cube 51'].geometry}
              material={materials['Cube 51 Material']}
              castShadow
              receiveShadow
              position={[139.55, -46.3, -5.06]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name='Cube 4'
              geometry={nodes['Cube 4'].geometry}
              material={materials['Cube 4 Material']}
              castShadow
              receiveShadow
              position={[0, 2.04, 0]}
              rotation={[-1.13, 0, -Math.PI / 2]}
              scale={1}
            />
          </group>
          <group name='Audio-r' position={[34.6, 24.66, 137.29]} scale={0.19}>
            <mesh
              name='Torus 2'
              geometry={nodes['Torus 2'].geometry}
              material={materials['blue-1']}
              castShadow
              receiveShadow
              position={[-41.19, 55.71, -0.71]}
              rotation={[-Math.PI / 2, -1.4, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name='Torus'
              geometry={nodes.Torus.geometry}
              material={materials['blue-1']}
              castShadow
              receiveShadow
              position={[-59, -53.05, -0.71]}
              rotation={[-Math.PI / 2, -1.4, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name='Sphere 2'
              geometry={nodes['Sphere 2'].geometry}
              material={materials['blue-1']}
              castShadow
              receiveShadow
              position={[-27.54, 54.64, -0.92]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            <mesh
              name='Sphere'
              geometry={nodes.Sphere.geometry}
              material={materials['blue-1']}
              castShadow
              receiveShadow
              position={[-43.86, -54.12, -0.92]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            <mesh
              name='Cube 2'
              geometry={nodes['Cube 2'].geometry}
              material={materials['blue-1']}
              castShadow
              receiveShadow
              position={[0.52, 0, 0]}
              rotation={[0, -Math.PI / 2, 0]}
            />
          </group>
          <group name='mouse' position={[-24.91, 9.07, 111.91]} rotation={[Math.PI, -0.38, Math.PI]} scale={0.18}>
            <mesh
              name='Cylinder'
              geometry={nodes.Cylinder.geometry}
              material={materials['blue-2']}
              castShadow
              receiveShadow
              position={[-36.2, -2.74, -1.37]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              name='Cube'
              geometry={nodes.Cube.geometry}
              material={materials['blue-2']}
              castShadow
              receiveShadow
              position={[6.9, 9.33, 0]}
            />
          </group>
          <mesh
            name='Rectangle 3'
            geometry={nodes['Rectangle 3'].geometry}
            material={materials['blue-1-dark']}
            castShadow
            receiveShadow
            position={[-18.86, 1.42, 7.34]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.21}
          />
          <group name='Group 40' position={[-14.56, 5.65, 9.61]}>
            <mesh
              name='Merged Geometry1'
              geometry={nodes['Merged Geometry1'].geometry}
              material={materials['pink-light']}
              castShadow
              receiveShadow
              position={[-6, 2.01, 0.16]}
            />
            <mesh
              name='Cube 41'
              geometry={nodes['Cube 41'].geometry}
              material={materials['blue-1-3']}
              castShadow
              receiveShadow
              position={[0.02, -0.67, 0]}
              rotation={[-Math.PI / 2, -0.09, 0]}
              scale={0.07}
            />
            <mesh
              name='Torus1'
              geometry={nodes.Torus1.geometry}
              material={materials['blue-ish']}
              castShadow
              receiveShadow
              position={[14.3, 4.98, 40.33]}
              rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
              scale={0.09}
            />
            <mesh
              name='keybord_lign 8'
              geometry={nodes['keybord_lign 8'].geometry}
              material={materials['blue-ish']}
              castShadow
              receiveShadow
              position={[-14.73, 0.44, 22.9]}
              rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
              scale={0.07}
            />
            <mesh
              name='keybord_lign 9'
              geometry={nodes['keybord_lign 9'].geometry}
              material={materials['blue-ish']}
              castShadow
              receiveShadow
              position={[-14.73, 0.44, -40.47]}
              rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
              scale={0.07}
            />
            <mesh
              name='keybord_lign 6'
              geometry={nodes['keybord_lign 6'].geometry}
              material={materials['blue-ish']}
              castShadow
              receiveShadow
              position={[-8.93, 0.95, -26.7]}
              rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
              scale={0.07}
            />
            <mesh
              name='keybord_lign 5'
              geometry={nodes['keybord_lign 5'].geometry}
              material={materials['blue-ish']}
              castShadow
              receiveShadow
              position={[-3.09, 1.46, -29.76]}
              rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
              scale={0.07}
            />
            <mesh
              name='keybord_lign 4'
              geometry={nodes['keybord_lign 4'].geometry}
              material={materials['blue-ish']}
              castShadow
              receiveShadow
              position={[2.9, 1.98, -31.5]}
              rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
              scale={0.07}
            />
            <mesh
              name='Rectangle 7'
              geometry={nodes['Rectangle 7'].geometry}
              material={materials['blue-ish']}
              castShadow
              receiveShadow
              position={[-14.7, 0.45, 16.11]}
              rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
              scale={0.07}
            />
            <mesh
              name='Rectangle 51'
              geometry={nodes['Rectangle 51'].geometry}
              material={materials['blue-ish']}
              castShadow
              receiveShadow
              position={[-14.7, 0.45, -21.49]}
              rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
              scale={0.07}
            />
            <mesh
              name='Rectangle 10'
              geometry={nodes['Rectangle 10'].geometry}
              material={materials['blue-ish']}
              castShadow
              receiveShadow
              position={[8.7, 2.49, 38.91]}
              rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
              scale={0.07}
            />
            <mesh
              name='Rectangle1'
              geometry={nodes.Rectangle1.geometry}
              material={materials['blue-ish']}
              castShadow
              receiveShadow
              position={[14.38, 2.99, -38.89]}
              rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
              scale={0.07}
            />
            <mesh
              name='keybord_lign 2'
              geometry={nodes['keybord_lign 2'].geometry}
              material={materials['blue-ish']}
              castShadow
              receiveShadow
              position={[14.38, 2.99, -31.5]}
              rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
              scale={0.07}
            />
            <mesh
              name='keybord_lign 3'
              geometry={nodes['keybord_lign 3'].geometry}
              material={materials['blue-ish']}
              castShadow
              receiveShadow
              position={[8.66, 2.49, -40.37]}
              rotation={[-Math.PI / 2, -0.09, -Math.PI / 2]}
              scale={0.07}
            />
          </group>
          <group name='table' position={[-0.16, -48.04, -20.79]} scale={0.17}>
            <mesh
              name='Merged Geometry2'
              geometry={nodes['Merged Geometry2'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[0, -0.25, 140.64]}
              scale={6.04}
            />
          </group>
        </group>
      </group>
    </>
  );
};

export default Pc;
