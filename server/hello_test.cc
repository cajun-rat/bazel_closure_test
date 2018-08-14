#include <gtest/gtest.h>


TEST(Simple, simple) {
  EXPECT_EQ(1+1,2);
}




#ifndef __NO_MAIN__
int main(int argc, char** argv) {
  ::testing::InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
#endif
