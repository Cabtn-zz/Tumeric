import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
ftreContainer:{
		backgroundColor:'#fff',
		flex:1,
		marginTop:70,
		marginBottom:40,
		marginLeft:20,
		marginRight:20,
		borderRadius:20,
		borderWidth:4,
		borderColor:'#57c8f2'
	},
	ftreTitle:{
		color:'black',
        fontWeight:'bold',
    fontSize:20,
    fontFamily: 'Avenir' || 'System',
		textAlign:'center',
		margin:10,	
	},
	ftreDescription:{
    color:'black',
    fontFamily: 'Avenir' || 'System',
        fontSize:17,
		marginRight:20,
    marginLeft:20,
	},
	ftreCloseIcon:{
		alignSelf:'flex-end',
		flex:0.5,
		marginRight:10
	},
	ftreTitleContainer:{
		flex:1,
		flexDirection:'row',
		justifyContent:'center',
    alignItems:'center',
	},
	ftreDescriptionContainer:{
    flex:6.5,
    alignItems: 'center',
	},
	ftreExitContainer:{
		flex:2,
		justifyContent:'flex-start',
		alignItems:'center',
	},
	ftreExitButtonContainer:{
		width:200,
		height:40,
		backgroundColor:'#57c8f2',
		borderRadius:10,
		justifyContent:'center',
	},
	ftreExitButtonText:{
		color:'white',
		fontSize:20,
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
  }
});
export default styles;