using Microsoft.EntityFrameworkCore;
using webAPI.Models;


namespace webAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options){}
       
        public DbSet<Brand> Brands {get; set;}
    }
}