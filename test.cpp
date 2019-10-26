// Copyright 2012 The Emscripten Authors.  All rights reserved.
// Emscripten is available under two separate licenses, the MIT license and the
// University of Illinois/NCSA Open Source License.  Both these licenses can be
// found in the LICENSE file.

#include <math.h>
#include <stdint.h>
#include <iostream>

extern "C" {

  int add(int x, int y) {
    //std::cout << "Hello WASM!" << std::endl;
    return x+y;
  }

  int minus(int x, int y) {
    return x-y;
  }


  float* createTestLine (int numPx) {         
      float values[numPx];
      for (int i=0; i<numPx; i++) {
          values[i] = i;
      }
      auto arrayPtr = &values[0];
      return arrayPtr;
  }
  
  float* createTestImage (int numPx) {         
      float values[numPx][numPx];
      for (int j=0; j<numPx; j++) {
        for (int i=0; i<numPx; i++) {
            values[i][j] = i+j;
        }
      }
      auto arrayPtr = &values[0][0];
      return arrayPtr;
  }


}
