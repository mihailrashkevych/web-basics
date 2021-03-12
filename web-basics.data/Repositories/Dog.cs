﻿using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace web_basics.data.Repositories
{
    public class Dog
    {
        WebBasicsDBContext context;

        public Dog(IConfiguration configuration)
        {
            this.context = new WebBasicsDBContext(configuration);
        }

        public IEnumerable<Entities.Dog> Get()
        {
            var dogs = context.Dogs.ToList();
            return dogs;
        }

        public void Create( Entities.Dog dog)
        {
            context.Add(dog);
        }

        public void Save()
        {
            context.SaveChanges();
        }

    }
}
