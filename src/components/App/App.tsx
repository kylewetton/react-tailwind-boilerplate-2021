import ExampleComponent from '../ExampleComponent';
import VersionEmitter from '../VersionEmitter';
const App = () => {
    return (
        <ExampleComponent>
            <p>Example component. Interact with me, check out my code, then delete me.</p>
            <span>Boilerplate version: <VersionEmitter /></span>
        </ExampleComponent>
    )
}

export default App;