```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Use optional chaining to safely access the parameter
    const myParam = router.query.myParam ?? 'default-value'; 
    console.log(myParam); 
    router.push(`/some-page?param=${myParam}`);
  };

  return (
    <button onClick={handleClick}>Go to Some Page</button>
  );
}

export default MyComponent; 
```