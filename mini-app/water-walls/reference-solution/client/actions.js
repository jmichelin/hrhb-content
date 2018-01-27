const calculate = (arr) => {
  return new Promise((resolve, reject) => {
    console.log('argument arr', arr)
    fetch('http://127.0.0.1:8080/api/waterCalc/', {
      method: 'POST',
      body: JSON.stringify(arr),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => res.json())
      .then(res => {
        resolve(res)
      })
      .catch(err => console.log(err))
  });
}