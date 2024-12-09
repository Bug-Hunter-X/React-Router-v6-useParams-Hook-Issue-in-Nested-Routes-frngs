The solution involves restructuring the routes to ensure correct parameter propagation using the `Outlet` component.  Here's the corrected code:

```javascript
import { BrowserRouter, Routes, Route, useParams, Outlet } from 'react-router-dom';

function ParentRoute() {
  return (
    <Routes>
      <Route path=':parentId' element={<ChildRoute />} />
    </Routes>
  );
}

function ChildRoute() {
  const { parentId } = useParams();
  return (
    <Routes>
        <Route path=':childId' element={<ChildComponent parentId={parentId}/>} />
    </Routes>
  );
}

function ChildComponent({parentId}) {
  const { childId } = useParams();
  return (
    <div>
      <p>Parent ID: {parentId}</p>
      <p>Child ID: {childId}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ParentRoute/>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```
By using nested `<Routes>` within `ChildRoute` and passing `parentId` as props to `ChildComponent`, we ensure the parent's parameter is available to the deeply nested components, resolving the undefined parameter issue.