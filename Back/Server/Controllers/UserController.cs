using Microsoft.AspNetCore.Mvc;
using Model;
using Microsoft.EntityFrameworkCore;
namespace Server.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    [HttpPost]
    [Route("register")]
    public object? resgisterUser([FromBody] User user)
    {
        var id = user.save();
        if(id == -1){
            return "usuario ja cadastrado";
        }
        else{
            return new {
                id = id,
                nome = user.nome,
                idade = user.idade,
                raca = user.raca,
                login = user.login,
                password = user.password,
                foto = user.foto,
            };
        }
    }

    [HttpGet]
    [Route("login/{usuario}/{senha}")]
    public IActionResult loginUser(string usuario, string senha){
        
        var userLogin = Model.User.loginUser(usuario, senha);
        var result = new ObjectResult(userLogin);
        Response.Headers.Add("Access-Control-Allow-Origin", "*");
        return result;
    }

    [HttpGet]
    [Route("dados/{usuario}/{senha}")]
    public IActionResult PegaDados(string usuario, string senha){
        
        var dadosusuario = Model.User.dados(usuario, senha);
        var result = new ObjectResult(dadosusuario);
        Response.Headers.Add("Access-Control-Allow-Origin", "*");
        return result;
    }
}
