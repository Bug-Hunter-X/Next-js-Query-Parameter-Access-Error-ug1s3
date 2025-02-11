```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // This will cause an error if the query parameter is missing
    const myParam = router.query.myParam;
    console.log(myParam); // This line might throw an error
    router.push(`/some-page?param=${myParam}`);
  };

  return (
    <button onClick={handleClick}>Go to Some Page</button>
  );
}

export default MyComponent; 
```