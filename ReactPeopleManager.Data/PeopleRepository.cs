using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ReactPeopleManager.Data
{
    public class PeopleRepository
    {
        private string _connection;

        public PeopleRepository(string connection)
        {
            _connection = connection;
        }

        public List<Person> GetPeople()
        {
            using (var context = new PeopleContext(_connection))
            {
                return context.People.ToList();
            }
        }
        public void AddPerson(string date)
        {
            var bDay = DateTime.Parse(date).Year;
            var age = DateTime.Now.Year - bDay;

            var person = (new Person
            {
                FirstName = Faker.Name.First(),
                LastName = Faker.Name.Last(),
                Age = age
            });

            using (var context = new PeopleContext(_connection))
            {
                context.People.Add(person);
                context.SaveChanges();
            }
        }
        public void AddPeople(int[] range, int amount)
        {
            using (var context = new PeopleContext(_connection))
            {
                for (int i = 0; i < amount; i++)
                {
                    context.People.Add(new Person
                    {
                        FirstName = Faker.Name.First(),
                        LastName = Faker.Name.Last(),
                        Age = Faker.RandomNumber.Next(range[0], range[1])
                    }) ;
                }
                context.SaveChanges();
            }

        }
    }
}
