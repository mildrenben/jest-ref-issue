var renderer = require('react-test-renderer')
var React = require('react')

class Comp extends React.Component {
  componentDidMount () {
    console.log(this.myRef)
    // If you comment out the line below the test will work
    this.myRef.addEventListener('click', () => console.log('click'))
  }
  render() { 
    return (
      <div ref={div => { this.myRef = div }}>foo</div>
    )
  }
}

it('Test refs', () => {
  const tree = renderer.create(
    <Comp />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})