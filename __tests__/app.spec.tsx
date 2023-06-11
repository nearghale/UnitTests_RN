import {fireEvent, render} from '@testing-library/react-native';
import App from '../App';
import {act} from 'react-test-renderer';

describe('../App.tsx', () => {
  it('should click in button should show message', () => {
    jest.useFakeTimers(); // mock timers

    const {getByTestId, getByText} = render(<App />);

    const Button = getByTestId('btn-click');

    expect(Button.props.style.backgroundColor).toBe('#6A5ACD');

    fireEvent.press(Button);

    act(() => {
      jest.runAllTimers(); // trigger setTimeout
    });

    const Message = getByText('Você clicou');

    expect(Message).toBeTruthy();

    expect(Button.props.style.backgroundColor).toBe('#fafa');
  });
});
