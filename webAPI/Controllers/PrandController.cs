using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using webAPI.Models;

namespace webAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PrandController : ControllerBase
    {
        public PrandController()
        {
        }

        [HttpGet("")]
        public IEnumerable<string> Getstring()
        {
            return new string[] {"KIKO MILANO","HUDA BEAUTY","LANEIGE","TARTE"};
        }

    }
}