using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Backend.Dtos;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Backend.Controllers
{
   [ApiController, Route("[controller]/[action]")]
  public class AuthController : ControllerBase
  {
    private readonly AuthService _authService;

    public AuthController(AuthService authService)
    {
      _authService = authService;
    }
    
    [HttpPost]
    [AllowAnonymous]
    public ActionResult<LoginResponse> Login(LoginRequest request)
    {
      var response = _authService.Login(request);
      return new JsonResult(response);
    }
  }
}