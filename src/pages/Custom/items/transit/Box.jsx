import useSpline from '@splinetool/r3f-spline';

const Box = ({ position }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/zcfCS82iFe4Pm1mO/scene.splinecode');
  return (
    <>
      <group name='Box' scale={0.02} position={position}>
        <mesh
          name='box'
          geometry={nodes.box.geometry}
          material={nodes.box.material}
          castShadow
          receiveShadow
          position={[0.05, 50.73, 27.31]}
        />
      </group>
    </>
  );
};

export default Box;
