class Fault extends Error {
  code: number;

  constructor(code: number, name: string, message: string) {
    super(message);
    this.name = name;
    this.code = code;
  }
}

export default Fault;