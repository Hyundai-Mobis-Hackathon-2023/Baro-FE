import useSpline from '@splinetool/r3f-spline';

const Store = () => {
  const { nodes, materials } = useSpline('https://prod.spline.design/h5gaXv3L-glIUWi8/scene.splinecode');

  return (
    <>
      <group name='storeCar-S' position={[-3, 3, 5]} scale={0.05}>
        <group name='cabinet-3 3' position={[117.87, -31.66, 199.66]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh
            name='Cube 57'
            geometry={nodes['Cube 57'].geometry}
            material={materials.yellow}
            castShadow
            receiveShadow
            position={[51.11, -73.72, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={1}
          />
          <mesh
            name='Cube 62'
            geometry={nodes['Cube 62'].geometry}
            material={materials['blue-2-dark']}
            castShadow
            receiveShadow
            position={[0, 111.04, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.32, 0.91, 1]}
          />
          <mesh
            name='Cube 61'
            geometry={nodes['Cube 61'].geometry}
            material={materials['Cube 61 Material']}
            castShadow
            receiveShadow
            position={[0, 101.26, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.32, 0.91, 1]}
          />
          <mesh
            name='Cube 60'
            geometry={nodes['Cube 60'].geometry}
            material={materials['Cube 60 Material']}
            castShadow
            receiveShadow
            position={[-0.95, 53.74, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.3, 0.91, 1]}
          />
          <mesh
            name='Cube 63'
            geometry={nodes['Cube 63'].geometry}
            material={materials['Cube 63 Material']}
            castShadow
            receiveShadow
            position={[52.05, -82.05, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1.3, 0.91, 1]}
          />
          <mesh
            name='Cube 59'
            geometry={nodes['Cube 59'].geometry}
            material={materials['Cube 59 Material']}
            castShadow
            receiveShadow
            position={[-0.95, 6.32, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.3, 0.91, 1]}
          />
          <mesh
            name='Cube 571'
            geometry={nodes['Cube 571'].geometry}
            material={materials['Cube 571 Material']}
            castShadow
            receiveShadow
            position={[-1.06, -79.94, -8.38]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
        </group>
        <group name='cabinet-3 2' position={[117.87, -31.66, 6.95]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh
            name='Cube 572'
            geometry={nodes['Cube 572'].geometry}
            material={materials.yellow}
            castShadow
            receiveShadow
            position={[51.11, -73.72, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={1}
          />
          <mesh
            name='Cube 621'
            geometry={nodes['Cube 621'].geometry}
            material={materials['blue-2-dark']}
            castShadow
            receiveShadow
            position={[0, 111.04, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.32, 0.91, 1]}
          />
          <mesh
            name='Cube 611'
            geometry={nodes['Cube 611'].geometry}
            material={materials['Cube 611 Material']}
            castShadow
            receiveShadow
            position={[0, 101.26, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.32, 0.91, 1]}
          />
          <mesh
            name='Cube 601'
            geometry={nodes['Cube 601'].geometry}
            material={materials['Cube 601 Material']}
            castShadow
            receiveShadow
            position={[-0.95, 53.74, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.3, 0.91, 1]}
          />
          <mesh
            name='Cube 631'
            geometry={nodes['Cube 631'].geometry}
            material={materials['Cube 631 Material']}
            castShadow
            receiveShadow
            position={[52.05, -82.05, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1.3, 0.91, 1]}
          />
          <mesh
            name='Cube 591'
            geometry={nodes['Cube 591'].geometry}
            material={materials['Cube 591 Material']}
            castShadow
            receiveShadow
            position={[-0.95, 6.32, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.3, 0.91, 1]}
          />
          <mesh
            name='Cube 573'
            geometry={nodes['Cube 573'].geometry}
            material={materials['Cube 573 Material']}
            castShadow
            receiveShadow
            position={[-1.06, -79.94, -8.38]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
        </group>
        <group name='cabinet-3' position={[117.87, -31.66, -184.3]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh
            name='Cube 574'
            geometry={nodes['Cube 574'].geometry}
            material={materials.yellow}
            castShadow
            receiveShadow
            position={[51.11, -73.72, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={1}
          />
          <mesh
            name='Cube 622'
            geometry={nodes['Cube 622'].geometry}
            material={materials['blue-2-dark']}
            castShadow
            receiveShadow
            position={[0, 111.04, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.32, 0.91, 1]}
          />
          <mesh
            name='Cube 612'
            geometry={nodes['Cube 612'].geometry}
            material={materials['Cube 612 Material']}
            castShadow
            receiveShadow
            position={[0, 101.26, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.32, 0.91, 1]}
          />
          <mesh
            name='Cube 602'
            geometry={nodes['Cube 602'].geometry}
            material={materials['Cube 602 Material']}
            castShadow
            receiveShadow
            position={[-0.95, 53.74, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.3, 0.91, 1]}
          />
          <mesh
            name='Cube 632'
            geometry={nodes['Cube 632'].geometry}
            material={materials['Cube 632 Material']}
            castShadow
            receiveShadow
            position={[52.05, -82.05, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1.3, 0.91, 1]}
          />
          <mesh
            name='Cube 592'
            geometry={nodes['Cube 592'].geometry}
            material={materials['Cube 592 Material']}
            castShadow
            receiveShadow
            position={[-0.95, 6.32, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.3, 0.91, 1]}
          />
          <mesh
            name='Cube 575'
            geometry={nodes['Cube 575'].geometry}
            material={materials['Cube 575 Material']}
            castShadow
            receiveShadow
            position={[-1.06, -79.94, -8.38]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
        </group>
        <group name='Group 80' position={[-138.88, -74.2, -184.92]}>
          <group name='lamp' position={[-14.47, -27.02, -43.61]} scale={0.78}>
            <mesh
              name='Cylinder 3'
              geometry={nodes['Cylinder 3'].geometry}
              material={materials['wood-red-light']}
              castShadow
              receiveShadow
              position={[-0.22, 56.27, 0.66]}
              scale={0.42}
            />
            <mesh
              name='Cylinder 4'
              geometry={nodes['Cylinder 4'].geometry}
              material={materials['Cylinder 4 Material']}
              castShadow
              receiveShadow
              position={[0.1, 107.98, -0.3]}
              scale={0.42}
            />
            <mesh
              name='Cylinder 6'
              geometry={nodes['Cylinder 6'].geometry}
              material={materials['wood-red-light']}
              castShadow
              receiveShadow
              position={[-0.09, 125.26, -0.3]}
              scale={0.42}
            />
            <mesh
              name='Cylinder 2'
              geometry={nodes['Cylinder 2'].geometry}
              material={materials['wood-red-light']}
              castShadow
              receiveShadow
              position={[-0.1, 20.93, 0.3]}
              scale={0.42}
            />
          </group>
          <group name='cabinet-bedroom' position={[0, -44.32, 0]} scale={[0.75, 1, 1]}>
            <mesh
              name='Cube 65'
              geometry={nodes['Cube 65'].geometry}
              material={materials.yellow}
              castShadow
              receiveShadow
              position={[0.4, 4.1, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={1}
            />
            <mesh
              name='Cube 64'
              geometry={nodes['Cube 64'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[1.12, 4.1, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={1}
            />
            <mesh
              name='Cube 633'
              geometry={nodes['Cube 633'].geometry}
              material={materials.yellow}
              castShadow
              receiveShadow
              position={[0, 4.1, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={1}
            />
          </group>
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
        <group name='pig' position={[-2.21, -90.23, 80.93]} rotation={[-Math.PI, 1.11, -Math.PI]}>
          <group name='container' position={[0, -49.13, 0]}>
            <group name='rotator' position={[0, 49.13, 0]}>
              <mesh
                name='Cube 9'
                geometry={nodes['Cube 9'].geometry}
                material={materials['Cube 9 Material']}
                castShadow
                receiveShadow
                position={[-3.27, 26.49, -29.52]}
                rotation={[Math.PI, -0.04, -Math.PI]}
                scale={0.27}
              />
              <group name='Group 6' position={[0.58, 23.43, -28.85]} rotation={[-2.91, -0.04, -3.13]} scale={0.27}>
                <mesh
                  name='Shape 4'
                  geometry={nodes['Shape 4'].geometry}
                  material={materials['Shape 4 Material']}
                  castShadow
                  receiveShadow
                  position={[82.7, 10.8, -6.64]}
                  rotation={[-0.08, 0.17, 0.12]}
                  scale={1}
                />
                <mesh
                  name='Shape 3'
                  geometry={nodes['Shape 3'].geometry}
                  material={materials['Shape 3 Material']}
                  castShadow
                  receiveShadow
                  position={[-75.72, 12.09, -12.05]}
                  rotation={[-0.08, -0.35, -0.09]}
                  scale={1}
                />
              </group>
              <mesh
                name='Sphere 2'
                geometry={nodes['Sphere 2'].geometry}
                material={materials['Sphere 2 Material']}
                castShadow
                receiveShadow
                position={[-12.18, 32.1, -25.04]}
                rotation={[-2.77, -0.04, -3.13]}
                scale={0.27}
              />
              <mesh
                name='Sphere'
                geometry={nodes.Sphere.geometry}
                material={materials['Sphere Material']}
                castShadow
                receiveShadow
                position={[8.47, 32.11, -25.9]}
                rotation={[-2.77, -0.04, -3.13]}
                scale={0.27}
              />
              <mesh
                name='Cube 8'
                geometry={nodes['Cube 8'].geometry}
                material={materials['Cube 8 Material']}
                castShadow
                receiveShadow
                position={[-0.12, 20.54, -2.89]}
                rotation={[Math.PI, -0.04, -Math.PI]}
                scale={0.27}
              />
            </group>
          </group>
        </group>
        <group name='bag_small 3' position={[-131.29, -108.26, 171.97]} scale={[0.2, 0.15, 0.15]}>
          <mesh
            name='bag'
            geometry={nodes.bag.geometry}
            material={materials['']}
            castShadow
            receiveShadow
            position={[0.05, 24.52, 0.4]}
            scale={[0.78, 1, 0.2]}
          />
          <mesh
            name='handle_back'
            geometry={nodes.handle_back.geometry}
            material={materials['']}
            castShadow
            receiveShadow
            position={[-0.49, 88.51, -110.19]}
            rotation={[-3.06, -0.03, -1.57]}
            scale={[1.35, 1.18, 1.22]}
          />
          <mesh
            name='handle_front'
            geometry={nodes.handle_front.geometry}
            material={materials['']}
            castShadow
            receiveShadow
            position={[-0.56, 88.51, 111.4]}
            rotation={[-0.08, -0.04, -1.57]}
            scale={[-1.35, 1.18, 1.22]}
          />
          <mesh
            name='ring_front_left'
            geometry={nodes.ring_front_left.geometry}
            material={materials.metal}
            castShadow
            receiveShadow
            position={[-73.99, 225.88, 74.25]}
            rotation={[1.5, 0, 0]}
            scale={1.07}
          />
          <mesh
            name='ring_front_right'
            geometry={nodes.ring_front_right.geometry}
            material={materials.metal}
            castShadow
            receiveShadow
            position={[73.3, 225.88, 74.75]}
            rotation={[1.5, 0, 0]}
            scale={1.07}
          />
          <mesh
            name='ring_back_left'
            geometry={nodes.ring_back_left.geometry}
            material={materials.metal}
            castShadow
            receiveShadow
            position={[-74.04, 225.88, -73.3]}
            rotation={[1.64, 0, -Math.PI]}
            scale={[-1.07, 1.07, 1.07]}
          />
          <mesh
            name='ring_back_right'
            geometry={nodes.ring_back_right.geometry}
            material={materials.metal}
            castShadow
            receiveShadow
            position={[73.24, 225.88, -73.28]}
            rotation={[1.64, 0, -Math.PI]}
            scale={[-1.07, 1.07, 1.07]}
          />
          <group name='knot_front_left' position={[-74.12, 225.88, 71.03]} scale={1}>
            <mesh
              name='Torus 2'
              geometry={nodes['Torus 2'].geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[0, 1.21, -0.66]}
              rotation={[-0.56, 0.89, 0.04]}
              scale={[-0.1, 0.07, 0.11]}
            />
            <mesh
              name='Torus'
              geometry={nodes.Torus.geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[0, -1.4, 0.56]}
              rotation={[2.53, 1.03, 2.05]}
              scale={[-0.08, 0.1, 0.12]}
            />
          </group>
          <group name='knot_front_right' position={[72.45, 225.81, 71.91]}>
            <mesh
              name='Torus 21'
              geometry={nodes['Torus 21'].geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[1.54, 0, -0.42]}
              rotation={[0.43, 0.27, -1.45]}
              scale={[-0.1, 0.07, 0.11]}
            />
            <mesh
              name='Torus1'
              geometry={nodes.Torus1.geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[-1.17, -0.9, 0]}
              rotation={[1.79, 0.26, 3.03]}
              scale={[-0.08, 0.1, 0.12]}
            />
          </group>
          <group name='knot_back_left' position={[-74.18, 225.88, -70.08]} scale={1}>
            <mesh
              name='Torus 22'
              geometry={nodes['Torus 22'].geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[-0.01, 1.21, 0.65]}
              rotation={[-2.56, 0.89, 3.1]}
              scale={[0.1, 0.07, 0.11]}
            />
            <mesh
              name='Torus2'
              geometry={nodes.Torus2.geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[0, -1.4, -0.57]}
              rotation={[0.29, 0.95, 1.67]}
              scale={[0.08, 0.1, 0.12]}
            />
          </group>
          <group name='knot_back_right' position={[72.37, 225.81, -70.45]}>
            <mesh
              name='Torus 23'
              geometry={nodes['Torus 23'].geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[1.55, 0, 0.42]}
              rotation={[2.72, 0.28, -1.69]}
              scale={[0.1, 0.07, 0.11]}
            />
            <mesh
              name='Torus3'
              geometry={nodes.Torus3.geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[-1.15, -0.9, 0]}
              rotation={[1.34, 0.26, 0.12]}
              scale={[0.08, 0.1, 0.12]}
            />
          </group>
        </group>
        <group name='bag_small 2' position={[-131.29, -108.26, 213.48]} scale={[0.2, 0.15, 0.15]}>
          <mesh
            name='bag1'
            geometry={nodes.bag1.geometry}
            material={materials['']}
            castShadow
            receiveShadow
            position={[0.05, 24.52, 0.4]}
            scale={[0.78, 1, 0.2]}
          />
          <mesh
            name='handle_back1'
            geometry={nodes.handle_back1.geometry}
            material={materials['']}
            castShadow
            receiveShadow
            position={[-0.49, 88.51, -110.19]}
            rotation={[-3.06, -0.03, -1.57]}
            scale={[1.35, 1.18, 1.22]}
          />
          <mesh
            name='handle_front1'
            geometry={nodes.handle_front1.geometry}
            material={materials['']}
            castShadow
            receiveShadow
            position={[-0.56, 88.51, 111.4]}
            rotation={[-0.08, -0.04, -1.57]}
            scale={[-1.35, 1.18, 1.22]}
          />
          <mesh
            name='ring_front_left1'
            geometry={nodes.ring_front_left1.geometry}
            material={materials.metal}
            castShadow
            receiveShadow
            position={[-73.99, 225.88, 74.25]}
            rotation={[1.5, 0, 0]}
            scale={1.07}
          />
          <mesh
            name='ring_front_right1'
            geometry={nodes.ring_front_right1.geometry}
            material={materials.metal}
            castShadow
            receiveShadow
            position={[73.3, 225.88, 74.75]}
            rotation={[1.5, 0, 0]}
            scale={1.07}
          />
          <mesh
            name='ring_back_left1'
            geometry={nodes.ring_back_left1.geometry}
            material={materials.metal}
            castShadow
            receiveShadow
            position={[-74.04, 225.88, -73.3]}
            rotation={[1.64, 0, -Math.PI]}
            scale={[-1.07, 1.07, 1.07]}
          />
          <mesh
            name='ring_back_right1'
            geometry={nodes.ring_back_right1.geometry}
            material={materials.metal}
            castShadow
            receiveShadow
            position={[73.24, 225.88, -73.28]}
            rotation={[1.64, 0, -Math.PI]}
            scale={[-1.07, 1.07, 1.07]}
          />
          <group name='knot_front_left1' position={[-74.12, 225.88, 71.03]} scale={1}>
            <mesh
              name='Torus 24'
              geometry={nodes['Torus 24'].geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[0, 1.21, -0.66]}
              rotation={[-0.56, 0.89, 0.04]}
              scale={[-0.1, 0.07, 0.11]}
            />
            <mesh
              name='Torus4'
              geometry={nodes.Torus4.geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[0, -1.4, 0.56]}
              rotation={[2.53, 1.03, 2.05]}
              scale={[-0.08, 0.1, 0.12]}
            />
          </group>
          <group name='knot_front_right1' position={[72.45, 225.81, 71.91]}>
            <mesh
              name='Torus 25'
              geometry={nodes['Torus 25'].geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[1.54, 0, -0.42]}
              rotation={[0.43, 0.27, -1.45]}
              scale={[-0.1, 0.07, 0.11]}
            />
            <mesh
              name='Torus5'
              geometry={nodes.Torus5.geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[-1.17, -0.9, 0]}
              rotation={[1.79, 0.26, 3.03]}
              scale={[-0.08, 0.1, 0.12]}
            />
          </group>
          <group name='knot_back_left1' position={[-74.18, 225.88, -70.08]} scale={1}>
            <mesh
              name='Torus 26'
              geometry={nodes['Torus 26'].geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[-0.01, 1.21, 0.65]}
              rotation={[-2.56, 0.89, 3.1]}
              scale={[0.1, 0.07, 0.11]}
            />
            <mesh
              name='Torus6'
              geometry={nodes.Torus6.geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[0, -1.4, -0.57]}
              rotation={[0.29, 0.95, 1.67]}
              scale={[0.08, 0.1, 0.12]}
            />
          </group>
          <group name='knot_back_right1' position={[72.37, 225.81, -70.45]}>
            <mesh
              name='Torus 27'
              geometry={nodes['Torus 27'].geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[1.55, 0, 0.42]}
              rotation={[2.72, 0.28, -1.69]}
              scale={[0.1, 0.07, 0.11]}
            />
            <mesh
              name='Torus7'
              geometry={nodes.Torus7.geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[-1.15, -0.9, 0]}
              rotation={[1.34, 0.26, 0.12]}
              scale={[0.08, 0.1, 0.12]}
            />
          </group>
        </group>
        <group name='bag_small' position={[-131.29, -108.26, 252.79]} scale={[0.2, 0.15, 0.15]}>
          <mesh
            name='bag2'
            geometry={nodes.bag2.geometry}
            material={materials['']}
            castShadow
            receiveShadow
            position={[0.05, 24.52, 0.4]}
            scale={[0.78, 1, 0.2]}
          />
          <mesh
            name='handle_back2'
            geometry={nodes.handle_back2.geometry}
            material={materials['']}
            castShadow
            receiveShadow
            position={[-0.49, 88.51, -110.19]}
            rotation={[-3.06, -0.03, -1.57]}
            scale={[1.35, 1.18, 1.22]}
          />
          <mesh
            name='handle_front2'
            geometry={nodes.handle_front2.geometry}
            material={materials['']}
            castShadow
            receiveShadow
            position={[-0.56, 88.51, 111.4]}
            rotation={[-0.08, -0.04, -1.57]}
            scale={[-1.35, 1.18, 1.22]}
          />
          <mesh
            name='ring_front_left2'
            geometry={nodes.ring_front_left2.geometry}
            material={materials.metal}
            castShadow
            receiveShadow
            position={[-73.99, 225.88, 74.25]}
            rotation={[1.5, 0, 0]}
            scale={1.07}
          />
          <mesh
            name='ring_front_right2'
            geometry={nodes.ring_front_right2.geometry}
            material={materials.metal}
            castShadow
            receiveShadow
            position={[73.3, 225.88, 74.75]}
            rotation={[1.5, 0, 0]}
            scale={1.07}
          />
          <mesh
            name='ring_back_left2'
            geometry={nodes.ring_back_left2.geometry}
            material={materials.metal}
            castShadow
            receiveShadow
            position={[-74.04, 225.88, -73.3]}
            rotation={[1.64, 0, -Math.PI]}
            scale={[-1.07, 1.07, 1.07]}
          />
          <mesh
            name='ring_back_right2'
            geometry={nodes.ring_back_right2.geometry}
            material={materials.metal}
            castShadow
            receiveShadow
            position={[73.24, 225.88, -73.28]}
            rotation={[1.64, 0, -Math.PI]}
            scale={[-1.07, 1.07, 1.07]}
          />
          <group name='knot_front_left2' position={[-74.12, 225.88, 71.03]} scale={1}>
            <mesh
              name='Torus 28'
              geometry={nodes['Torus 28'].geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[0, 1.21, -0.66]}
              rotation={[-0.56, 0.89, 0.04]}
              scale={[-0.1, 0.07, 0.11]}
            />
            <mesh
              name='Torus8'
              geometry={nodes.Torus8.geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[0, -1.4, 0.56]}
              rotation={[2.53, 1.03, 2.05]}
              scale={[-0.08, 0.1, 0.12]}
            />
          </group>
          <group name='knot_front_right2' position={[72.45, 225.81, 71.91]}>
            <mesh
              name='Torus 29'
              geometry={nodes['Torus 29'].geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[1.54, 0, -0.42]}
              rotation={[0.43, 0.27, -1.45]}
              scale={[-0.1, 0.07, 0.11]}
            />
            <mesh
              name='Torus9'
              geometry={nodes.Torus9.geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[-1.17, -0.9, 0]}
              rotation={[1.79, 0.26, 3.03]}
              scale={[-0.08, 0.1, 0.12]}
            />
          </group>
          <group name='knot_back_left2' position={[-74.18, 225.88, -70.08]} scale={1}>
            <mesh
              name='Torus 210'
              geometry={nodes['Torus 210'].geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[-0.01, 1.21, 0.65]}
              rotation={[-2.56, 0.89, 3.1]}
              scale={[0.1, 0.07, 0.11]}
            />
            <mesh
              name='Torus10'
              geometry={nodes.Torus10.geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[0, -1.4, -0.57]}
              rotation={[0.29, 0.95, 1.67]}
              scale={[0.08, 0.1, 0.12]}
            />
          </group>
          <group name='knot_back_right2' position={[72.37, 225.81, -70.45]}>
            <mesh
              name='Torus 211'
              geometry={nodes['Torus 211'].geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[1.55, 0, 0.42]}
              rotation={[2.72, 0.28, -1.69]}
              scale={[0.1, 0.07, 0.11]}
            />
            <mesh
              name='Torus11'
              geometry={nodes.Torus11.geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[-1.15, -0.9, 0]}
              rotation={[1.34, 0.26, 0.12]}
              scale={[0.08, 0.1, 0.12]}
            />
          </group>
        </group>
        <mesh
          name='Cube 93'
          geometry={nodes['Cube 93'].geometry}
          material={materials['wood-red-light']}
          castShadow
          receiveShadow
          position={[-144.64, -76.4, -181.66]}
          rotation={[-Math.PI / 2, 0, 0.38]}
          scale={1}
        />
        <mesh
          name='Pyramid'
          geometry={nodes.Pyramid.geometry}
          material={materials['blue-2-dark']}
          castShadow
          receiveShadow
          position={[-138.24, -72.61, -141.54]}
          rotation={[0, Math.PI / 9, 0]}
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

export default Store;
