const { CalcTotalCartPrice, AddProductToCart } = require('../../src/services/CartService');

jest.mock('../../src/models/ProductModel');
jest.mock('../../src/models/CartModel');

const ProductModel = require('../../src/models/ProductModel');
const CartModel = require('../../src/models/CartModel');

// Simuler les données de produit et de panier pour les tests
const mockProduct = { _id: 'product123', price: 100 };
const mockUser = { _id: 'user123' };
const mockCartItem = { product: 'product1234', price: 100, quantity: 1 };
const mockCart = { user: 'user123', cartItems: [mockCartItem], save: jest.fn() };

ProductModel.findById = jest.fn().mockResolvedValue(mockProduct);
CartModel.findOne = jest.fn().mockResolvedValue(null); // Simule l'absence de panier
CartModel.create = jest.fn().mockResolvedValue(mockCart);

describe('Integration Test: Adding Product to Cart', () => {
    it('adds a product to the cart successfully', async () => {
  
      // Configuration du mock pour ProductModel.findById
      ProductModel.findById.mockResolvedValue(mockProduct);
  
      // Configuration du mock pour CartModel.findOne
      CartModel.findOne.mockResolvedValue(mockCart);
  
      // Requête pour ajouter un produit au panier
      const req = { user: mockUser, body: { productId: 'product1234' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const next = jest.fn();
  
      // Exécution de la fonction pour ajouter un produit au panier
      await AddProductToCart(req, res, next);
  
      // Vérification des interactions
      expect(ProductModel.findById).toHaveBeenCalledWith('product1234');
      expect(CartModel.findOne).toHaveBeenCalledWith({ user: 'user123' });
      expect(mockCart.cartItems).toEqual(
        expect.arrayContaining([{ product: 'product1234', price: 100, quantity: 2 }])
      );
      expect(mockCart.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
        status: 'success',
        message: 'product added to cart successfully',
        data: expect.objectContaining({
          cartItems: expect.arrayContaining([
            expect.objectContaining({ product: 'product1234' })
          ])
        })
      }));
    });
  });
  


describe('CalcTotalCartPrice', () => {
    it('should calculate the total cart price correctly', () => {
      const cart = {
        cartItems: [
          { price: 10, quantity: 2 }, // 20
          { price: 5, quantity: 3 },  // 15
        ],
        totalCartPrice: 0,
        totalPriceAfterDiscount: 0,
      };
  
      const expectedTotalPrice = 35; // 20 + 15
      const totalPrice = CalcTotalCartPrice(cart);
  
      expect(totalPrice).toBe(expectedTotalPrice);
      expect(cart.totalCartPrice).toBe(expectedTotalPrice);
      expect(cart.totalPriceAfterDiscount).toBeUndefined();
    });
  
    it('should handle an empty cart', () => {
      const cart = {
        cartItems: [],
        totalCartPrice: 0,
        totalPriceAfterDiscount: 0,
      };
  
      const expectedTotalPrice = 0;
      const totalPrice = CalcTotalCartPrice(cart);
  
      expect(totalPrice).toBe(expectedTotalPrice);
      expect(cart.totalCartPrice).toBe(expectedTotalPrice);
    });
  
    // Vous pouvez ajouter plus de tests pour couvrir d'autres cas de figure
  });