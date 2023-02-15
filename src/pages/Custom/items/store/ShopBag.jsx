import useSpline from '@splinetool/r3f-spline';

const ShopBag = ({ position }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/58hOUPHBVk252noZ/scene.splinecode');
  return (
    <>
      <group name='Shopbag' scale={0.05} position={position}>
        <group name='resize' position={[0, -49, 0]}>
          <group name='bag_small' position={[0, -0.18, -40.52]} scale={[0.2, 0.15, 0.15]}>
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
          <group name='bag_small1' position={[0, -0.18, 0.99]} scale={[0.2, 0.15, 0.15]}>
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
          <group name='bag_small2' position={[0, -0.18, 40.3]} scale={[0.2, 0.15, 0.15]}>
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
        </group>
      </group>
    </>
  );
};

export default ShopBag;
