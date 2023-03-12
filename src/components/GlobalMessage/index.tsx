import React from 'react';
import { styles } from './styles';
import { Animated, Text, View } from 'react-native';
import { EMessageTypes, EObject, IMessageProps, IObject, TShowGlobalMessage } from './typeAndInterface';
import useEmitter, { EDeviceEmitter, emitter } from '../../hooks/useEmitter';
import MessageIcon from './MessageIcon';
import successIcon from '../../assets/icons/checked.png';
import warningIcon from '../../assets/icons/warning.png';

export const ACTION_DURATION = 500;
export const DEFAULT_MESSAGE_DURATION = 2000;
export const DEFAULT_MESSAGE_VALUE = {
  type: EMessageTypes.success,
  message: '',
  duration: DEFAULT_MESSAGE_DURATION,
  randomId: Math.random().toString(),
};

export const show: TShowGlobalMessage = (
  message,
  type = EMessageTypes.success,
  duration = DEFAULT_MESSAGE_DURATION,
) => {
  const param = {
    message,
    type,
    duration,
  };

  emitter(EDeviceEmitter.SHOW_MESSAGE, param);
};

interface IExtendedMessageProps extends IMessageProps {
  randomId: string;
}

const GlobalMessage: React.FC = React.memo(() => {
  const opacity = React.useRef(new Animated.Value(0)).current;
  const [messageProps, setMessageProps] = React.useState<IExtendedMessageProps>(DEFAULT_MESSAGE_VALUE);

  const whichData = React.useCallback(
    (type: EObject) => {
      const object: IObject = {
        icon: <MessageIcon iconSrc={successIcon} />,
        backgroundColor: 'white',
        top: 10,
      };
      switch (messageProps.type) {
        case EMessageTypes.success:
          object.backgroundColor = 'white';
          object.icon = <MessageIcon iconSrc={successIcon} />;
          break;

        case EMessageTypes.failed:
          object.backgroundColor = 'white';
          object.icon = <MessageIcon iconSrc={warningIcon} />;
          break;

        default:
          object.icon = <View />;
          break;
      }
      return object[type];
    },
    [messageProps.type],
  );

  const containerStyle = React.useMemo(
    () => ({
      ...styles.container,
      backgroundColor: whichData(EObject.backgroundColor),
      opacity,
      transform: [
        {
          translateY: opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [-20, 0],
          }),
        },
      ],
      top: whichData(EObject.top),
    }),
    [opacity, whichData],
  );

  const updateMessage = React.useCallback((params: IMessageProps) => {
    setMessageProps({ ...params, randomId: Math.random().toString() });
  }, []);

  useEmitter(EDeviceEmitter.SHOW_MESSAGE, updateMessage);

  React.useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: ACTION_DURATION,
        useNativeDriver: true,
      }),
      Animated.delay(messageProps.duration - ACTION_DURATION),
      Animated.timing(opacity, {
        toValue: 0,
        duration: ACTION_DURATION,
        useNativeDriver: true,
      }),
    ]).start();
  }, [opacity, messageProps.message, messageProps.duration, messageProps.randomId]);

  if (!messageProps.message) return null;

  return (
    <Animated.View style={containerStyle}>
      <View style={styles.wrapper}>
        <View style={styles.iconWrapper}>{whichData(EObject.icon)}</View>
        <Text style={styles.messageText}>{messageProps.message}</Text>
      </View>
    </Animated.View>
  );
});

export default GlobalMessage;
