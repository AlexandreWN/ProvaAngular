namespace Model;

public class User
{
    public int id { get; set; }
    public int idade { get; set; }
    public string nome { get; set; }
    public string raca { get; set; }
    public string login { get; set; }
    public string password { get; set; }
    public string foto { get; set; }

    public int save()
    {
        var id = 0;

        using (var context = new Context())
        {
            var dados = context.User.FirstOrDefault(u => u.login == login);
            if(dados == null)
            {
                var user = new User
                {
                    login = this.login,
                    nome = this.nome,
                    password = this.password,
                    idade = this.idade,
                    raca = this.raca,
                    foto = this.foto
                };
                context.User.Add(user);
                context.SaveChanges();
                id = user.id;
                return id;
            }
            else
            {
                return -1;
            }
        }
    }

    public static User? loginUser(string usuario, string senha)
    {
        using (var context = new Context())
        {
            var user = context.User.FirstOrDefault(a => a.login == usuario &&  a.password == senha);
            return user;
        }
    }

    public static User? dados(string usuario, string senha)
    {
        using (var context = new Context())
        {
            var user = context.User.FirstOrDefault(a => a.login == usuario &&  a.password == senha);
            return user;
        }
    }
}