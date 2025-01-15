export const ROUTER_CODE_EXAMPLE = `
func main() {
  p := poteto.New()
  
  p.GET("/", func(ctx *poteto.Context) error{
    return ctx.String(http.StatusOK, "Poteto Simple Web framework"))
  });
  p.POST("/", func(ctx *poteto.Context) error{
    return ctx.String(http.StatusOK, "Poteto Simple Web framework"))
  });

  p.Run(":8080")
}
`;

export const JUST_ROUTER_CODE_EXAMPLE = `
func main() {
  potetoRouter := poteto.NewRouter()

  potetoRouter.GET("/", func(ctx *poteto.Context) error{
    return ctx.String(http.StatusOK, "Poteto Simple Web framework"))
  });

  p.Run(":8080")
}
`;
