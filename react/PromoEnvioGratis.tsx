import { PromoEnvioGratis } from './components/PromoEnvioGratis'

export default PromoEnvioGratis


// const {width} = Dimensions.get('screen');

// const AnimatedProgress: FunctionComponent = () => {
//   return (
//     <ProgressBar widthPct={item} />
//   )

// const ProgressBar: FC <{widthPct: number}> = ({widthPct}) => {
//   const barWidth = React.useRef(new Animated.Value(0)).current;

//   const finalWidth = (width * widthPct) / 10;

//   useEffect(() => {
//     Animated.spring(barWidth, {
//       toValue: finalWidth,
//       bounciness: 10,
//       speed: 2,
//       useNativeDriver: true,
//       delay: widthPct * 100,
//     }).start();
//   }, []);

//   return (
//     <View style={style.barContainer}>
//       <Animated.View style={[style.progressBar, {width: barWidth}]} />
//     </View>
//   );
// };

// const style = StyleSheet.create({
//   contentContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 30,
//   },
//   barContainer: {
//     padding: 40,
//   },
//   progressBar: {
//     backgroundColor: 'purple',
//     height: 30,
//     borderRadius: 15,
//   },
// });

// export default AnimatedProgress;
