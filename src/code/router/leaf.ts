export const LEAF_CODE_EXAMPLE = `
func main() {
  p := poteto.New()

  p.Leaf("/users", func(userApi poteto.Leaf) {
    userApi.Register(
      middleware.CamaraWithConfig(
        middleware.DefaultCamaraConfig,
      ),
    )
    userApi.GET("/", <your handler>)
    userApi.GET("/:name", <your handler>)
  })

  p.Run(":8080")
}
`;

export const NOT_LEAF_CODE_EXAMPLE = `
func main() {
  p := poteto.New()

  p.Combine("/users", middleware.CamaraWithConfig(
    middleware.DefaultCamaraConfig,
  )
  p.GET("/users/", <your handler>)
  p.GET("/users/:name", <your handler>)

  p.Run(":8080")
}
`;
