import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
    title: string;
    headerTag: string;
    rectangle: JSX.Element;
    rectangle2: JSX.Element;
    rectangle3: JSX.Element;
    rectangle4: JSX.Element;
    rectangle5: JSX.Element;
}

const Header: React.FC<HeaderProps> = ({
  title,
  headerTag,
  rectangle,
  rectangle2,
  rectangle3,
  rectangle4,
  rectangle5,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.rectangle}>{rectangle}</View>
      <View style={styles.rectangle2}>{rectangle2}</View>
      <View style={styles.rectangle3}>{rectangle3}</View>
      <View style={styles.rectangle4}>{rectangle4}</View>
      <View style={styles.rectangle5}>{rectangle5}</View>A
      <Text style={styles.headerText}>{title}</Text>
      <Text style={styles.headerText}>{headerTag}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 1,
    fontWeight: 'bold',
    color: 'red',
    
    textAlign: 'right',
    width: '100%',
  },
  rectangle: {
    padding: 10,
    height: '5%',
    width: '25%',
    backgroundColor: 'darkblue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
    marginRight: 5,
  },
  rectangle2: {
    padding: 10,
    height: '5%',
    width: '2%',
    backgroundColor: 'orange',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 5,
  },
  rectangle3: {
    padding: 4,
    height: '2%',
    width: '35%',
    bottom: 9,
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 5,
  },
  rectangle4: {
    padding: 10,
    height: '1%',
    width: '33%',
    backgroundColor: 'blue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 5,
  },
  rectangle5: {
    flex: 1,
    padding: 10,
    height: '5%',
    width: '10%',
    backgroundColor: 'gray',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 5,
  },
});

export default Header;
