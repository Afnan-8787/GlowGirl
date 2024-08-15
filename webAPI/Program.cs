using webAPI.Data; // Ensure this matches your namespace
using Microsoft.EntityFrameworkCore; // Required for UseSqlServer extension

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllersWithViews().AddNewtonsoftJson();
builder.Services.AddCors();



// Register the DataContext with SQL Server
builder.Services.AddDbContext<DataContext>(options => 
    options.UseSqlServer(builder.Configuration.GetConnectionString("GlowGirlDB")));

var app = builder.Build();



if (app.Environment.IsDevelopment())
{
   
    app.UseDeveloperExceptionPage();
}
app.UseRouting();
app.UseCors(m => m.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();
app.Run();
