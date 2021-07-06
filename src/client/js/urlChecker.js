// this is funciom to ckeck if the url user insert is valis or no
  function urlValidiation(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  };

  // here i export it to import it in any file
  export { urlValidiation }
  