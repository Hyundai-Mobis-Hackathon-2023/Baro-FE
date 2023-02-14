import useSpline from '@splinetool/r3f-spline';

const Office = () => {
  const { nodes, materials } = useSpline('https://prod.spline.design/3CmL3ua9ngzqeWgI/scene.splinecode');

  return (
    <>
      <group name='officeCar-S' position={[-3, 3, 5]} scale={0.05}>
        <group name='car 2' position={[19.67, 0, -10.66]}>
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
        <group name='table-1' position={[142.94, -73.92, -203.33]}>
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
              material={materials['blue-1-dark']}
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
              material={materials['blue-1-dark']}
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
              material={materials['blue-1-dark']}
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
        <group name='artboard' position={[-91.59, -61.5, 195.3]} rotation={[-2.75, -0.83, -2.8]} scale={0.19}>
          <mesh
            name='Rectangle 21'
            geometry={nodes['Rectangle 21'].geometry}
            material={materials['white-material']}
            castShadow
            receiveShadow
            position={[-2.45, 124.25, 31.44]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={0.95}
          />
          <mesh
            name='Merged Geometry'
            geometry={nodes['Merged Geometry'].geometry}
            material={materials.yellow}
            castShadow
            receiveShadow
            position={[9.42, -22.12, 2.91]}
            rotation={[-2.94, 0.88, -3.07]}
            scale={5.3}
          />
        </group>
        <group name='Group 80' position={[132.75, -48.96, 41.53]}>
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
                name='Rectangle1'
                geometry={nodes.Rectangle1.geometry}
                material={materials['blue-1-3']}
                castShadow
                receiveShadow
                position={[-121.92, -118.66, -4.31]}
                rotation={[0, -Math.PI / 2, 0]}
              />
              <mesh
                name='Ellipse 21'
                geometry={nodes['Ellipse 21'].geometry}
                material={materials['blue-1-3']}
                castShadow
                receiveShadow
                position={[-121.91, 128.14, 48.08]}
                rotation={[0, -Math.PI / 2, 0]}
              />
              <mesh
                name='Cube 51'
                geometry={nodes['Cube 51'].geometry}
                material={materials['Cube 51 Material']}
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
                name='Merged Geometry1'
                geometry={nodes['Merged Geometry1'].geometry}
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
                name='Rectangle 51'
                geometry={nodes['Rectangle 51'].geometry}
                material={materials['Rectangle 51 Material']}
                castShadow
                receiveShadow
                position={[4.42, -66.89, -6.25]}
                rotation={[-1.22, -0.27, -2.19]}
                scale={0.84}
              />
              <mesh
                name='Rectangle 41'
                geometry={nodes['Rectangle 41'].geometry}
                material={materials['']}
                castShadow
                receiveShadow
                position={[-9.76, -82.25, 11.61]}
                rotation={[-1.22, -0.27, -2.19]}
                scale={0.84}
              />
              <mesh
                name='Cube 71'
                geometry={nodes['Cube 71'].geometry}
                material={materials['Cube 71 Material']}
                castShadow
                receiveShadow
                position={[-58.97, -92.67, -139.61]}
                rotation={[-Math.PI, 0.67, -Math.PI / 2]}
                scale={1}
              />
            </group>
            <mesh
              name='Cube 72'
              geometry={nodes['Cube 72'].geometry}
              material={materials['Cube 72 Material']}
              castShadow
              receiveShadow
              position={[-139.98, -2.99, -81.82]}
              rotation={[-Math.PI, 0, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name='Cube 61'
              geometry={nodes['Cube 61'].geometry}
              material={materials['Cube 61 Material']}
              castShadow
              receiveShadow
              position={[139.49, -2.99, -83.54]}
              rotation={[-Math.PI, 0, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name='Cube 73'
              geometry={nodes['Cube 73'].geometry}
              material={materials['Cube 73 Material']}
              castShadow
              receiveShadow
              position={[-139.92, -46.3, -3.35]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name='Cube 52'
              geometry={nodes['Cube 52'].geometry}
              material={materials['Cube 52 Material']}
              castShadow
              receiveShadow
              position={[139.55, -46.3, -5.06]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              name='Cube 41'
              geometry={nodes['Cube 41'].geometry}
              material={materials['Cube 41 Material']}
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
              name='Cube 21'
              geometry={nodes['Cube 21'].geometry}
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
              name='Cube2'
              geometry={nodes.Cube2.geometry}
              material={materials['blue-2']}
              castShadow
              receiveShadow
              position={[6.9, 9.33, 0]}
            />
          </group>
          <mesh
            name='Rectangle 31'
            geometry={nodes['Rectangle 31'].geometry}
            material={materials['blue-1-dark']}
            castShadow
            receiveShadow
            position={[-18.86, 1.42, 7.34]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.21}
          />
          <group name='Group 40' position={[-14.56, 5.65, 9.61]}>
            <mesh
              name='Merged Geometry2'
              geometry={nodes['Merged Geometry2'].geometry}
              material={materials['pink-light']}
              castShadow
              receiveShadow
              position={[-6, 2.01, 0.16]}
            />
            <mesh
              name='Cube 42'
              geometry={nodes['Cube 42'].geometry}
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
              name='Rectangle 52'
              geometry={nodes['Rectangle 52'].geometry}
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
              name='Rectangle2'
              geometry={nodes.Rectangle2.geometry}
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
              name='Merged Geometry3'
              geometry={nodes['Merged Geometry3'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[0, -0.25, 140.64]}
              scale={6.04}
            />
          </group>
        </group>
        <group name='garbage can' position={[146.77, -128.25, 243.09]} scale={0.18}>
          <mesh
            name='Pyramid'
            geometry={nodes.Pyramid.geometry}
            material={materials['yellow-light']}
            castShadow
            receiveShadow
            position={[5.69, 22.85, -18.22]}
            rotation={[0, -1.13, 2.09]}
            scale={1}
          />
          <mesh
            name='Pentagon'
            geometry={nodes.Pentagon.geometry}
            material={materials['blue-ish']}
            castShadow
            receiveShadow
            position={[-3.24, 59.35, 20.98]}
            rotation={[-1.35, 0.26, -Math.PI / 2]}
            scale={1}
          />
          <mesh
            name='Cube 22'
            geometry={nodes['Cube 22'].geometry}
            material={materials['Untitled Material']}
            castShadow
            receiveShadow
            position={[0, -32.01, 17.17]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={1}
          />
        </group>
        <group name='plant-1' position={[-119.47, -89.31, -219.98]} rotation={[-Math.PI, 0.03, -Math.PI]} scale={0.17}>
          <mesh
            name='Merged Geometry4'
            geometry={nodes['Merged Geometry4'].geometry}
            material={materials['']}
            castShadow
            receiveShadow
            position={[-2.59, 123.1, 14.55]}
            rotation={[-Math.PI, -0.03, -Math.PI]}
            scale={5.92}
          />
          <mesh
            name='Cylinder 3'
            geometry={nodes['Cylinder 3'].geometry}
            material={materials['blue-2']}
            castShadow
            receiveShadow
            position={[3.61, -174.85, 10.39]}
            rotation={[0, 0, 0]}
            scale={[1.9, 1.42, 1.9]}
          />
          <mesh
            name='Merged Geometry 21'
            geometry={nodes['Merged Geometry 21'].geometry}
            material={materials.purple}
            castShadow
            receiveShadow
            position={[1.83, -258.66, 9.94]}
            rotation={[-Math.PI, -0.03, -Math.PI]}
            scale={5.92}
          />
        </group>
        <mesh
          name='chair'
          geometry={nodes.chair.geometry}
          material={materials['Untitled Material']}
          castShadow
          receiveShadow
          position={[-24.46, -93.04, 44.44]}
          rotation={[-Math.PI, -0.46, -Math.PI]}
          scale={1}
        />
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

export default Office;
