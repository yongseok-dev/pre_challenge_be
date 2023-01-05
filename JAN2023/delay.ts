type SomeFunctionReturnString = () => string;

function delay(f: SomeFunctionReturnString, seconds: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      try {
        const res = f();
        resolve(res);
      } catch (error) {
        reject(error);
      }
    }, seconds * 1000);
  });
}

const success = () => {
  return "successfully done";
};

const fail = () => {
  throw new Error("failed");
};

delay(success, 2)
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

delay(fail, 2)
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

/*
    $ ts-node delay.ts
    after 2 seconds

    successfully done
    Error: failed
*/
