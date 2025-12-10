function status(request, response) {
  response
    .status(200)
    .send(
      "Eu sou foderoso e irei me reunir a outros foderosos para fazer coisas foderosas",
    );
}

export default status;
