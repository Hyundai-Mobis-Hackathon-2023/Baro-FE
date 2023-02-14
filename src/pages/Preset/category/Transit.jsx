import useSpline from '@splinetool/r3f-spline';

const Transit = () => {
  const { nodes, materials } = useSpline('https://prod.spline.design/w5DzxFMeC7HfCwh3/scene.splinecode');
  return (
    <>
      <group name='transitCar-S' position={[-3, 3, 5]} scale={0.05}>
        <group name='box_beer 3' position={[-122.31, -99.54, 75.85]} scale={0.15}>
          <mesh
            name='sheet_03'
            geometry={nodes.sheet_03.geometry}
            material={materials.carton}
            castShadow
            receiveShadow
            position={[93.49, -98.45, -0.25]}
            rotation={[-1.57, 0, -Math.PI / 2]}
            scale={[1.05, 0.52, 1]}
          />
          <mesh
            name='sheet_02'
            geometry={nodes.sheet_02.geometry}
            material={materials.carton}
            castShadow
            receiveShadow
            position={[-95.08, -98.45, -0.41]}
            rotation={[-1.57, 0, -Math.PI / 2]}
            scale={[1.05, 0.52, 1]}
          />
          <mesh
            name='sheet_01'
            geometry={nodes.sheet_01.geometry}
            material={materials.carton}
            castShadow
            receiveShadow
            position={[-0.2, -25.9, -1.77]}
            rotation={[-1.57, 0, 0]}
            scale={[1, 0.55, 1]}
          />
          <mesh
            name='box'
            geometry={nodes.box.geometry}
            material={materials.carton}
            castShadow
            receiveShadow
            position={[0, -29.45, 4.58]}
            rotation={[-1.57, 0, 0]}
            scale={1}
          />
        </group>
        <group name='box_beer 2' position={[-122.31, -99.54, 152.25]} scale={0.15}>
          <mesh
            name='sheet_031'
            geometry={nodes.sheet_031.geometry}
            material={materials.carton}
            castShadow
            receiveShadow
            position={[93.49, -98.45, -0.25]}
            rotation={[-1.57, 0, -Math.PI / 2]}
            scale={[1.05, 0.52, 1]}
          />
          <mesh
            name='sheet_021'
            geometry={nodes.sheet_021.geometry}
            material={materials.carton}
            castShadow
            receiveShadow
            position={[-95.08, -98.45, -0.41]}
            rotation={[-1.57, 0, -Math.PI / 2]}
            scale={[1.05, 0.52, 1]}
          />
          <mesh
            name='sheet_011'
            geometry={nodes.sheet_011.geometry}
            material={materials.carton}
            castShadow
            receiveShadow
            position={[-0.2, -25.9, -1.77]}
            rotation={[-1.57, 0, 0]}
            scale={[1, 0.55, 1]}
          />
          <mesh
            name='box1'
            geometry={nodes.box1.geometry}
            material={materials.carton}
            castShadow
            receiveShadow
            position={[0, -29.45, 4.58]}
            rotation={[-1.57, 0, 0]}
            scale={1}
          />
        </group>
        <group name='box_beer' position={[-122.31, -99.54, 227.38]} scale={0.15}>
          <mesh
            name='sheet_032'
            geometry={nodes.sheet_032.geometry}
            material={materials.carton}
            castShadow
            receiveShadow
            position={[93.49, -98.45, -0.25]}
            rotation={[-1.57, 0, -Math.PI / 2]}
            scale={[1.05, 0.52, 1]}
          />
          <mesh
            name='sheet_022'
            geometry={nodes.sheet_022.geometry}
            material={materials.carton}
            castShadow
            receiveShadow
            position={[-95.08, -98.45, -0.41]}
            rotation={[-1.57, 0, -Math.PI / 2]}
            scale={[1.05, 0.52, 1]}
          />
          <mesh
            name='sheet_012'
            geometry={nodes.sheet_012.geometry}
            material={materials.carton}
            castShadow
            receiveShadow
            position={[-0.2, -25.9, -1.77]}
            rotation={[-1.57, 0, 0]}
            scale={[1, 0.55, 1]}
          />
          <mesh
            name='box2'
            geometry={nodes.box2.geometry}
            material={materials.carton}
            castShadow
            receiveShadow
            position={[0, -29.45, 4.58]}
            rotation={[-1.57, 0, 0]}
            scale={1}
          />
        </group>
        <group name='Group 77' position={[-12.62, -74.34, -36.59]} rotation={[0, -0.95, 0]} scale={0.3}>
          <group name='Little' position={[73.58, -7.21, 155.16]} rotation={[-0.11, -0.6, -0.05]} scale={1}>
            <mesh
              name='Cube 8'
              geometry={nodes['Cube 8'].geometry}
              material={materials['Little Body']}
              castShadow
              receiveShadow
              position={[0.15, -9.58, 9.86]}
            />
            <mesh
              name='Sphere 5'
              geometry={nodes['Sphere 5'].geometry}
              material={materials.Eyes}
              castShadow
              receiveShadow
              position={[30.83, 24.04, 60.61]}
              scale={0.78}
            />
            <mesh
              name='Sphere 4'
              geometry={nodes['Sphere 4'].geometry}
              material={materials.Eyes}
              castShadow
              receiveShadow
              position={[-29.56, 24.04, 60.61]}
              scale={0.78}
            />
            <mesh
              name='Cube 14'
              geometry={nodes['Cube 14'].geometry}
              material={materials['Little Body']}
              castShadow
              receiveShadow
              position={[-62.23, -26.56, 32.58]}
              rotation={[-2.9, -0.17, 0.47]}
              scale={0.27}
            />
            <mesh
              name='Cube 13'
              geometry={nodes['Cube 13'].geometry}
              material={materials['Little Body']}
              castShadow
              receiveShadow
              position={[60.88, -22.67, 32.91]}
              rotation={[-3.12, 0.25, -0.47]}
              scale={0.27}
            />
            <mesh
              name='Cube 12'
              geometry={nodes['Cube 12'].geometry}
              material={materials['Little orange']}
              castShadow
              receiveShadow
              position={[28.31, -66.41, 22.5]}
              rotation={[3.02, -0.03, -0.45]}
              scale={0.27}
            />
            <mesh
              name='Cube 121'
              geometry={nodes['Cube 121'].geometry}
              material={materials['Little orange']}
              castShadow
              receiveShadow
              position={[-29.9, -66.22, 24.16]}
              rotation={[3.02, -0.03, 0.13]}
              scale={0.27}
            />
            <mesh
              name='Cube 11'
              geometry={nodes['Cube 11'].geometry}
              material={materials['Little orange']}
              castShadow
              receiveShadow
              position={[1.09, 8.83, 64.44]}
              rotation={[1.16, 0.5, 0.61]}
              scale={[0.96, 1.04, 0.93]}
            />
            <mesh
              name='Cube 10'
              geometry={nodes['Cube 10'].geometry}
              material={materials['Little orange']}
              castShadow
              receiveShadow
              position={[0.52, 15.39, 65.03]}
              rotation={[-0.09, 0.85, 1.19]}
              scale={[0.88, 0.97, 1]}
            />
            <mesh
              name='Cube 9'
              geometry={nodes['Cube 9'].geometry}
              material={materials['Little Body']}
              castShadow
              receiveShadow
              position={[-1.4, 60.95, 25.99]}
              rotation={[0.68, 0.26, 0.62]}
              scale={1}
            />
          </group>
          <group name='Big' position={[19.5, 0.59, -41.29]}>
            <mesh
              name='Body'
              geometry={nodes.Body.geometry}
              material={materials['Big Body']}
              castShadow
              receiveShadow
              position={[-19.44, -31.2, -23.27]}
              rotation={[0, 0, 0.09]}
              scale={1}
            />
            <group name='Group' position={[-14.18, 77.12, 147.58]} rotation={[-0.22, 0, 0]} scale={0.51}>
              <mesh
                name='Cylinder'
                geometry={nodes.Cylinder.geometry}
                material={materials.Eyes}
                castShadow
                receiveShadow
                position={[-24.8, 21.54, 0.39]}
                rotation={[0, -0.02, 0.08]}
                scale={1}
              />
              <mesh
                name='Torus 2'
                geometry={nodes['Torus 2'].geometry}
                material={materials.Eyes}
                castShadow
                receiveShadow
                position={[-47.51, 17.38, 0]}
                rotation={[0, -0.02, 2.2]}
                scale={1}
              />
              <mesh
                name='Torus'
                geometry={nodes.Torus.geometry}
                material={materials.Eyes}
                castShadow
                receiveShadow
                position={[-1.89, 20.99, 0.87]}
                rotation={[0, -0.02, 2.2]}
                scale={1}
              />
            </group>
            <mesh
              name='Sphere 3'
              geometry={nodes['Sphere 3'].geometry}
              material={materials.Eyes}
              castShadow
              receiveShadow
              position={[51.11, 82.72, 117.21]}
              rotation={[0, 0, 0.09]}
            />
            <mesh
              name='Sphere 2'
              geometry={nodes['Sphere 2'].geometry}
              material={materials.Eyes}
              castShadow
              receiveShadow
              position={[-112.82, 68.48, 117.21]}
              rotation={[0, 0, 0.09]}
            />
            <mesh
              name='Sphere'
              geometry={nodes.Sphere.geometry}
              material={materials['Big Body']}
              castShadow
              receiveShadow
              position={[-8.1, -165.45, -186.91]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              name='Cube 5'
              geometry={nodes['Cube 5'].geometry}
              material={materials['Big Body']}
              castShadow
              receiveShadow
              position={[107.53, -78.29, 146.64]}
              rotation={[1.67, 0, -0.16]}
              scale={0.8}
            />
            <mesh
              name='Cube 7'
              geometry={nodes['Cube 7'].geometry}
              material={materials['Big Body']}
              castShadow
              receiveShadow
              position={[71.21, -197.72, 36.96]}
              rotation={[3.02, -0.03, -0.45]}
              scale={0.8}
            />
            <mesh
              name='Cube 6'
              geometry={nodes['Cube 6'].geometry}
              material={materials['Big Body']}
              castShadow
              receiveShadow
              position={[-101.62, -197.14, 41.89]}
              rotation={[3.02, -0.03, 0.13]}
              scale={0.8}
            />
            <mesh
              name='Cube 4'
              geometry={nodes['Cube 4'].geometry}
              material={materials['Big Body']}
              castShadow
              receiveShadow
              position={[-30.17, -83.07, 168.16]}
              rotation={[1.67, 0, -0.4]}
              scale={0.8}
            />
            <mesh
              name='Cube 3'
              geometry={nodes['Cube 3'].geometry}
              material={materials['Big Body']}
              castShadow
              receiveShadow
              position={[-17.23, 215.12, -8.87]}
              rotation={[0, 0, 0.38]}
              scale={0.93}
            />
            <mesh
              name='Cube 2'
              geometry={nodes['Cube 2'].geometry}
              material={materials['Big Body']}
              castShadow
              receiveShadow
              position={[-69.75, 208.7, -8.87]}
              rotation={[0, 0, -0.18]}
              scale={0.93}
            />
          </group>
        </group>
        <group name='refrigerator- interaction 2' position={[-0.6, -51.37, -197.52]}>
          <mesh
            name='Rectangle 5'
            geometry={nodes['Rectangle 5'].geometry}
            material={materials['Untitled Material']}
            castShadow
            receiveShadow
            position={[-10.43, 54.08, 33.44]}
            rotation={[0, 0, 0]}
            scale={1}
          />
          <mesh
            name='Rectangle 4'
            geometry={nodes['Rectangle 4'].geometry}
            material={materials.yellow}
            castShadow
            receiveShadow
            position={[-4.24, 52.09, 32.95]}
            rotation={[0, 0, 0.17]}
            scale={1}
          />
          <group name='interaction-open' position={[-48.49, 61.88, 18.41]}>
            <mesh
              name='Cube 81'
              geometry={nodes['Cube 81'].geometry}
              material={materials['orange-1']}
              castShadow
              receiveShadow
              position={[93.86, 1.83, 27.97]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[0.18, 0.18, 0.16]}
            />
            <mesh
              name='Rectangle 7'
              geometry={nodes['Rectangle 7'].geometry}
              material={materials['orange-1']}
              castShadow
              receiveShadow
              position={[54.59, 0, 0.01]}
              rotation={[0, 0, 0]}
              scale={[0.21, 0.21, 0.19]}
            />
          </group>
          <group name='Group 19' position={[6.18, -37.07, 29.8]}>
            <mesh
              name='Cube 44'
              geometry={nodes['Cube 44'].geometry}
              material={materials['orange-1']}
              castShadow
              receiveShadow
              position={[39.19, 33.1, 16.58]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[0.18, 0.18, 0.16]}
            />
            <mesh
              name='Rectangle 8'
              geometry={nodes['Rectangle 8'].geometry}
              material={materials['orange-1']}
              castShadow
              receiveShadow
              position={[0, 0, -11.38]}
              rotation={[0, 0, 0]}
              scale={[0.21, 0.21, 0.19]}
            />
          </group>
          <mesh
            name='Boolean'
            geometry={nodes.Boolean.geometry}
            material={nodes.Boolean.material}
            castShadow
            receiveShadow
            position={[6.1, 0, -25.47]}
          />
        </group>
        <group name='refrigerator- interaction' position={[-127.3, -51.37, -197.52]}>
          <mesh
            name='Rectangle 51'
            geometry={nodes['Rectangle 51'].geometry}
            material={materials['Untitled Material']}
            castShadow
            receiveShadow
            position={[-10.43, 54.08, 33.44]}
            rotation={[0, 0, 0]}
            scale={1}
          />
          <mesh
            name='Rectangle 41'
            geometry={nodes['Rectangle 41'].geometry}
            material={materials.yellow}
            castShadow
            receiveShadow
            position={[-4.24, 52.09, 32.95]}
            rotation={[0, 0, 0.17]}
            scale={1}
          />
          <group name='interaction-open1' position={[-48.49, 61.88, 18.41]}>
            <mesh
              name='Cube 82'
              geometry={nodes['Cube 82'].geometry}
              material={materials['orange-1']}
              castShadow
              receiveShadow
              position={[93.86, 1.83, 27.97]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[0.18, 0.18, 0.16]}
            />
            <mesh
              name='Rectangle 71'
              geometry={nodes['Rectangle 71'].geometry}
              material={materials['orange-1']}
              castShadow
              receiveShadow
              position={[54.59, 0, 0.01]}
              rotation={[0, 0, 0]}
              scale={[0.21, 0.21, 0.19]}
            />
          </group>
          <group name='Group 191' position={[6.18, -37.07, 29.8]}>
            <mesh
              name='Cube 441'
              geometry={nodes['Cube 441'].geometry}
              material={materials['orange-1']}
              castShadow
              receiveShadow
              position={[39.19, 33.1, 16.58]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[0.18, 0.18, 0.16]}
            />
            <mesh
              name='Rectangle 81'
              geometry={nodes['Rectangle 81'].geometry}
              material={materials['orange-1']}
              castShadow
              receiveShadow
              position={[0, 0, -11.38]}
              rotation={[0, 0, 0]}
              scale={[0.21, 0.21, 0.19]}
            />
          </group>
          <mesh
            name='Boolean1'
            geometry={nodes.Boolean1.geometry}
            material={nodes.Boolean1.material}
            castShadow
            receiveShadow
            position={[6.1, 0, -25.47]}
          />
        </group>
        <group name='cabinet-book 3' position={[132.6, -37.42, 156.26]}>
          <mesh
            name='Cube'
            geometry={nodes.Cube.geometry}
            material={materials['wood-red-light']}
            castShadow
            receiveShadow
            position={[-9.51, -51.57, -9.43]}
            rotation={[-Math.PI / 2, 0, 0.38]}
            scale={1}
          />
          <mesh
            name='Pyramid'
            geometry={nodes.Pyramid.geometry}
            material={materials['blue-2-dark']}
            castShadow
            receiveShadow
            position={[-8.45, -3.19, 25.54]}
            rotation={[0, Math.PI / 9, 0]}
            scale={1}
          />
          <group name='Group 771' position={[-6.75, 35.39, -3.58]}>
            <mesh
              name='Cube 71'
              geometry={nodes['Cube 71'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[1.38, -8.91, 34.48]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 31'
              geometry={nodes['Cube 31'].geometry}
              material={materials.pink}
              castShadow
              receiveShadow
              position={[1.3, -5.33, 23.72]}
              rotation={[Math.PI / 3, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 61'
              geometry={nodes['Cube 61'].geometry}
              material={materials['wall-livingroom']}
              castShadow
              receiveShadow
              position={[0.17, -5.88, 14.26]}
              rotation={[1.13, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 83'
              geometry={nodes['Cube 83'].geometry}
              material={materials['yellow-light']}
              castShadow
              receiveShadow
              position={[0.3, -2.86, 6.2]}
              rotation={[0.8, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 51'
              geometry={nodes['Cube 51'].geometry}
              material={materials['yellow-light']}
              castShadow
              receiveShadow
              position={[0.3, -0.97, -24.22]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 84'
              geometry={nodes['Cube 84'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[1.8, -1, -2.93]}
              rotation={[0.32, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 41'
              geometry={nodes['Cube 41'].geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[1.8, 0, -28.49]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 85'
              geometry={nodes['Cube 85'].geometry}
              material={materials.grey}
              castShadow
              receiveShadow
              position={[0.3, -2.83, -8.28]}
              rotation={[0.4, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 21'
              geometry={nodes['Cube 21'].geometry}
              material={materials.grey}
              castShadow
              receiveShadow
              position={[0.3, -2.57, -32.43]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 86'
              geometry={nodes['Cube 86'].geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[0, -1.1, -17.47]}
              rotation={[-0.05, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube1'
              geometry={nodes.Cube1.geometry}
              material={materials.purple}
              castShadow
              receiveShadow
              position={[-0.76, 0.57, -39.97]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.14}
            />
          </group>
          <group name='cd-2 2' position={[-12.25, -4.79, -33.48]} scale={0.14}>
            <mesh
              name='Merged Geometry'
              geometry={nodes['Merged Geometry'].geometry}
              material={materials.pink}
              castShadow
              receiveShadow
              position={[8.71, -21.84, 49.72]}
              scale={7.05}
            />
            <mesh
              name='Cube2'
              geometry={nodes.Cube2.geometry}
              material={materials['wood-red']}
              castShadow
              receiveShadow
              position={[-9.72, -3.84, -79.8]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            <group name='Group 192' position={[6.89, 10.69, 22.42]}>
              <mesh
                name='Ellipse 2'
                geometry={nodes['Ellipse 2'].geometry}
                material={materials['yellow-light']}
                castShadow
                receiveShadow
                position={[-1.4, 1.52, 4.21]}
                rotation={[-0.59, -0.18, -1.73]}
                scale={0.77}
              />
              <mesh
                name='Cube 22'
                geometry={nodes['Cube 22'].geometry}
                material={materials.grey}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[-0.59, -0.18, -0.16]}
                scale={0.77}
              />
            </group>
          </group>
          <mesh
            name='Merged Geometry1'
            geometry={nodes['Merged Geometry1'].geometry}
            material={materials['wood-red-light']}
            castShadow
            receiveShadow
          />
        </group>
        <group name='cabinet-book 2' position={[132.6, -37.42, 26.11]}>
          <mesh
            name='Cube3'
            geometry={nodes.Cube3.geometry}
            material={materials['wood-red-light']}
            castShadow
            receiveShadow
            position={[-9.51, -51.57, -9.43]}
            rotation={[-Math.PI / 2, 0, 0.38]}
            scale={1}
          />
          <mesh
            name='Pyramid1'
            geometry={nodes.Pyramid1.geometry}
            material={materials['blue-2-dark']}
            castShadow
            receiveShadow
            position={[-8.45, -3.19, 25.54]}
            rotation={[0, Math.PI / 9, 0]}
            scale={1}
          />
          <group name='Group 772' position={[-6.75, 35.39, -3.58]}>
            <mesh
              name='Cube 72'
              geometry={nodes['Cube 72'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[1.38, -8.91, 34.48]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 32'
              geometry={nodes['Cube 32'].geometry}
              material={materials.pink}
              castShadow
              receiveShadow
              position={[1.3, -5.33, 23.72]}
              rotation={[Math.PI / 3, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 62'
              geometry={nodes['Cube 62'].geometry}
              material={materials['wall-livingroom']}
              castShadow
              receiveShadow
              position={[0.17, -5.88, 14.26]}
              rotation={[1.13, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 87'
              geometry={nodes['Cube 87'].geometry}
              material={materials['yellow-light']}
              castShadow
              receiveShadow
              position={[0.3, -2.86, 6.2]}
              rotation={[0.8, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 52'
              geometry={nodes['Cube 52'].geometry}
              material={materials['yellow-light']}
              castShadow
              receiveShadow
              position={[0.3, -0.97, -24.22]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 88'
              geometry={nodes['Cube 88'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[1.8, -1, -2.93]}
              rotation={[0.32, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 42'
              geometry={nodes['Cube 42'].geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[1.8, 0, -28.49]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 89'
              geometry={nodes['Cube 89'].geometry}
              material={materials.grey}
              castShadow
              receiveShadow
              position={[0.3, -2.83, -8.28]}
              rotation={[0.4, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 23'
              geometry={nodes['Cube 23'].geometry}
              material={materials.grey}
              castShadow
              receiveShadow
              position={[0.3, -2.57, -32.43]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 810'
              geometry={nodes['Cube 810'].geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[0, -1.1, -17.47]}
              rotation={[-0.05, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube4'
              geometry={nodes.Cube4.geometry}
              material={materials.purple}
              castShadow
              receiveShadow
              position={[-0.76, 0.57, -39.97]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.14}
            />
          </group>
          <group name='cd-2 21' position={[-12.25, -4.79, -33.48]} scale={0.14}>
            <mesh
              name='Merged Geometry2'
              geometry={nodes['Merged Geometry2'].geometry}
              material={materials.pink}
              castShadow
              receiveShadow
              position={[8.71, -21.84, 49.72]}
              scale={7.05}
            />
            <mesh
              name='Cube5'
              geometry={nodes.Cube5.geometry}
              material={materials['wood-red']}
              castShadow
              receiveShadow
              position={[-9.72, -3.84, -79.8]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            <group name='Group 193' position={[6.89, 10.69, 22.42]}>
              <mesh
                name='Ellipse 21'
                geometry={nodes['Ellipse 21'].geometry}
                material={materials['yellow-light']}
                castShadow
                receiveShadow
                position={[-1.4, 1.52, 4.21]}
                rotation={[-0.59, -0.18, -1.73]}
                scale={0.77}
              />
              <mesh
                name='Cube 24'
                geometry={nodes['Cube 24'].geometry}
                material={materials.grey}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[-0.59, -0.18, -0.16]}
                scale={0.77}
              />
            </group>
          </group>
          <mesh
            name='Merged Geometry3'
            geometry={nodes['Merged Geometry3'].geometry}
            material={materials['wood-red-light']}
            castShadow
            receiveShadow
          />
        </group>
        <group name='cabinet-book' position={[132.6, -37.42, -105.69]}>
          <mesh
            name='Cube6'
            geometry={nodes.Cube6.geometry}
            material={materials['wood-red-light']}
            castShadow
            receiveShadow
            position={[-9.51, -51.57, -9.43]}
            rotation={[-Math.PI / 2, 0, 0.38]}
            scale={1}
          />
          <mesh
            name='Pyramid2'
            geometry={nodes.Pyramid2.geometry}
            material={materials['blue-2-dark']}
            castShadow
            receiveShadow
            position={[-8.45, -3.19, 25.54]}
            rotation={[0, Math.PI / 9, 0]}
            scale={1}
          />
          <group name='Group 773' position={[-6.75, 35.39, -3.58]}>
            <mesh
              name='Cube 73'
              geometry={nodes['Cube 73'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[1.38, -8.91, 34.48]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 33'
              geometry={nodes['Cube 33'].geometry}
              material={materials.pink}
              castShadow
              receiveShadow
              position={[1.3, -5.33, 23.72]}
              rotation={[Math.PI / 3, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 63'
              geometry={nodes['Cube 63'].geometry}
              material={materials['wall-livingroom']}
              castShadow
              receiveShadow
              position={[0.17, -5.88, 14.26]}
              rotation={[1.13, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 811'
              geometry={nodes['Cube 811'].geometry}
              material={materials['yellow-light']}
              castShadow
              receiveShadow
              position={[0.3, -2.86, 6.2]}
              rotation={[0.8, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 53'
              geometry={nodes['Cube 53'].geometry}
              material={materials['yellow-light']}
              castShadow
              receiveShadow
              position={[0.3, -0.97, -24.22]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 812'
              geometry={nodes['Cube 812'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[1.8, -1, -2.93]}
              rotation={[0.32, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 43'
              geometry={nodes['Cube 43'].geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[1.8, 0, -28.49]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 813'
              geometry={nodes['Cube 813'].geometry}
              material={materials.grey}
              castShadow
              receiveShadow
              position={[0.3, -2.83, -8.28]}
              rotation={[0.4, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 25'
              geometry={nodes['Cube 25'].geometry}
              material={materials.grey}
              castShadow
              receiveShadow
              position={[0.3, -2.57, -32.43]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 814'
              geometry={nodes['Cube 814'].geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[0, -1.1, -17.47]}
              rotation={[-0.05, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube7'
              geometry={nodes.Cube7.geometry}
              material={materials.purple}
              castShadow
              receiveShadow
              position={[-0.76, 0.57, -39.97]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.14}
            />
          </group>
          <group name='cd-2 22' position={[-12.25, -4.79, -33.48]} scale={0.14}>
            <mesh
              name='Merged Geometry4'
              geometry={nodes['Merged Geometry4'].geometry}
              material={materials.pink}
              castShadow
              receiveShadow
              position={[8.71, -21.84, 49.72]}
              scale={7.05}
            />
            <mesh
              name='Cube8'
              geometry={nodes.Cube8.geometry}
              material={materials['wood-red']}
              castShadow
              receiveShadow
              position={[-9.72, -3.84, -79.8]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            <group name='Group 194' position={[6.89, 10.69, 22.42]}>
              <mesh
                name='Ellipse 22'
                geometry={nodes['Ellipse 22'].geometry}
                material={materials['yellow-light']}
                castShadow
                receiveShadow
                position={[-1.4, 1.52, 4.21]}
                rotation={[-0.59, -0.18, -1.73]}
                scale={0.77}
              />
              <mesh
                name='Cube 26'
                geometry={nodes['Cube 26'].geometry}
                material={materials.grey}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[-0.59, -0.18, -0.16]}
                scale={0.77}
              />
            </group>
          </group>
          <mesh
            name='Merged Geometry5'
            geometry={nodes['Merged Geometry5'].geometry}
            material={materials['wood-red-light']}
            castShadow
            receiveShadow
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
            name='Ellipse 23'
            geometry={nodes['Ellipse 23'].geometry}
            material={materials['Ellipse 23 Material']}
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
      </group>
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
    </>
  );
};

export default Transit;
