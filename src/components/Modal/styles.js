import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
container:{
		backgroundColor:'#fff',
		flex:1,
		marginTop:60,
		marginBottom:20,
		marginLeft:10,
		marginRight:10,
		borderRadius:20,
		borderWidth:4,
		borderColor:'#57c8f2'
	},
	title:{
		color:'black',
        fontWeight:'bold',
    fontSize:20,
    fontFamily: 'Avenir' || 'System',
		textAlign:'center',
		margin:10,	
	},
	description:{
    color:'black',
    fontFamily: 'Avenir' || 'System',
        fontSize:17,
		marginRight:20,
    marginLeft:20,
	},
	closeIcon:{
		alignSelf:'flex-end',
		flex:0.5,
		marginRight:10
	},
	titleContainer:{
		flex:1,
		flexDirection:'row',
		justifyContent:'center',
    alignItems:'center',
	},
	descriptionContainer:{
    flex:6.5,
    alignItems: 'center',
	},
	exitContainer:{
		flex:2,
		justifyContent:'flex-start',
		alignItems:'center',
		paddingBottom: 5,
	},
	exitButtonContainer:{
		width:100,
		height:30,
		backgroundColor:'#57c8f2',
		borderRadius:10,
		justifyContent:'center',
	},
	exitButtonText:{
		color:'white',
		fontSize:15,
		fontWeight:'bold',
    textAlign:'center',
    fontFamily: 'Avenir' || 'System',
	},
  spacer: {
    padding: 5,
  },
  bigSpacer: {
    padding: 10,
  },
  item: {
    padding: 10,
    fontFamily: 'Avenir' || 'System',
	},
	openText: {
		color: 'blue',
		fontSize: 15,
		fontFamily:'Avenir' || 'System',
		textAlign:'center',
		marginBottom:20,	
	},
});
export default styles;