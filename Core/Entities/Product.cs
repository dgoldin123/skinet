using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Product
    {
        public int Id { get; set; }

        public string? Name { get; set; }
        //i added ? so that it is nullable - remove later on
    }
}
