using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactPeopleManager.Data;
using ReactPeopleManager.Web.Models;

namespace ReactPeopleManager.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private string _connection;
        public PeopleController(IConfiguration configuration)
        {
            _connection = configuration.GetConnectionString("Conn");
        }

        [HttpGet]
        [Route("getpeople")]
        public List<Person> GetPeople()
        {
            var repo = new PeopleRepository(_connection);
            return repo.GetPeople();
        }
        [HttpPost]
        [Route("addperson")]
        public void AddPerson(DateVM vm)
        {
            var repo = new PeopleRepository(_connection);
            repo.AddPerson(vm.Date);
        }
        [HttpPost]
        [Route("addpeople")]
        public void AddPeople(PeopleVM vm)
        {
            var repo = new PeopleRepository(_connection);
            repo.AddPeople(vm.AgeRange, vm.Amount);
        }

    }
}