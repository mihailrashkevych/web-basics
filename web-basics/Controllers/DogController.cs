using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace web_basics.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DogController : ControllerBase
    {
        business.Domains.Dog domain;

        public DogController(IConfiguration configuration)
        {
            this.domain = new business.Domains.Dog(configuration);
        }

        [HttpGet]
        public IActionResult Get()
        {
            var dogs = this.domain.Get();
            return Ok(dogs);
        }

        [HttpPost]
        public IActionResult Post([FromBody] business.ViewModels.Dog dog)
        {
            if (dog == null)
            {
                return BadRequest();
            }
            domain.Create(dog);
            return Ok(dog);
        }
    }
}