import {StyleSheet, Text, TouchableOpacity} from "react-native";

interface Props{
  isActive?:boolean,
  title?: string,
  children? : React.ReactNode
}
const Button = ({isActive, title, children} : Props) =>{
  return <TouchableOpacity style={[styles.button, {backgroundColor: (isActive && !children)? "#FD5B32" : '#ffffff'}]}>
    { children ? children : <Text style={[styles.text, {color: !isActive ? "#333333" : '#ffffff'}]}>{title ? title : 'Popular'}</Text>}
  </TouchableOpacity>
}


const styles = StyleSheet.create({
  button: {
    height: 44,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderColor:  "#DDDDDD" ,
    alignSelf: 'flex-start',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  text:{
    fontWeight: '500'
  }
});

export default Button