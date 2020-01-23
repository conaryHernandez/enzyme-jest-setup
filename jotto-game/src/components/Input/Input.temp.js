describe('guessWord action creator call', () => {
  let guessWordMock;
  let wrapper;

  const guessedWord = 'train';

  beforeEach(() => {
    guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock
    };

    wrapper = shallow(<UnnconnectedInput {...props} />);

    wrapper.setState({ currentGuess: guessedWord });

    const submit = findByTestAttr(wrapper, 'submit-button');

    submit.simulate('click', { preventDefault() {} });
  });

  test('calls `guessWord` when button is clicked', () => {
    const guessWordCallCount = guessWordCallCount.mock.calls.length;

    expect(guessWordCallCount).toBe(1);
  });

  test('call `guessWord` with input value as argument', () => {
    expect().toBe(guessedWord);
  });
});
