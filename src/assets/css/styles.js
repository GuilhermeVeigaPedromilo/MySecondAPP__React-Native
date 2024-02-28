import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        },

        body: {
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
        },

              containerHeader: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '100%',
                height:75,
              },

              imagelogo: {
                width: 65,
                height:55,
              },
                secondaryContainer: {
                flex: 1,
                width: '100%',
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                },
                
                boxcentral: {
                    width: 250,
                    height: 200,
                    borderColor: 'white',
                    borderWidth: 2,
                    color: 'white',
                },

                containerRodape: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                    height:75,
                  },
  });

  export default styles;