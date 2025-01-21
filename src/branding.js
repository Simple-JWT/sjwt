const srcLight = 'data:image/png;base64, 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';
const srcDark = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAASwAAAA8CAYAAADc3IdaAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAIIxJREFUeJztXQl4FFW2Znw6M76Z0TEha3fI2p19D1nYsneHELLjMoAsIg6LouMCgoL6FAdBEVBkFUFRUEEBFRQkgCgohj2ABEjYQthDAFfgf+feqk56qd7SnTRK/d/3f8aqW7dudff9OefUuee2a+cCqNXqW4i+xERiCXEY8RniVOI84nziDOJ44qPEe4hdiAHEv7lizDJkyLiBQEJzKzGdOJq4jHiIeJUIO3iKWEF8WRS69q5+LhkyZPyBQKLiQXySuJV4USc+iYlJ6NdnAMaNfg7TXp6OBXPexQcLP8ay9z/D8g8+w9L3VmDhvPcxY9ocjH92AoYMHo70bhkIDQ3VidevxAPEWcRk4p9c/awyZMj4nUItgInJJSYwsbFxKCsuxysTpmD1J+uxp7Ia1btqcbi6DiePncG50xfQeP4SLl24zHmReOHcRZw92YATR07j8P7j2L+zBpvXVWL+7IW4r//9SElO0YkXs9S+JeYQ/+zqZ5chQ8bvBKJFNYnYyMSkY1JHjHpsDNat+hp7tlbj6METXIh+/eU3XLt6DfaAtWfXMTE7XnsSld/sxOuTZ6JH9wKEhYUx4fqFuJoY5erPQYYMGdcxmGVD7Es8xoQqJCUN6vAIlBaXYf+uQ2g402i3QNmCS40/4uihE3ju6ef1Y13MXfwv0d3Vn4sMGTKuM5AweBFnM9dMFRuLgKGPwOejNQgqKiFXMBYb1m9wulDp48qVKxg4cCBU0THwH/EEQtI664RrIzHF1Z+PDBkyrhOQIKiIlcRrIRlZUMx+F14bd8L9SD28P/6YC8fIkSNbVbAqKyuRkJCAgMGD4V57DD4r1iKwd3+daB0n3unqz0mGDBkuBHsrR8zighAWhsC+A+G95jt4VNXAreEC7rh0CXc0NCA4MxNxcXFooL9bA1evXsXYsWO5OHkvXy7etxEeOw+gw7gXoYqJ0QXlWT7X/7j6c5MhQ4YLQJM/W8yLQsCQEfDasB3tD5/AHRcvCqIh0nfOHC4mr732WqsIVm1tLVJTUxGSkgK3s2eb703j8NhXC8X0t6BK6sjG8BvxWVd/bjJkyGhj0MTvRLysio6GOjwcyolT4XbyjIFQ6eh+8CBC0tORk5ODiooKrFu3DmvXrsXq1auxatUqfPbZZ1ixYgU+JvdxyZIl+OCDD7Bo0SIsXLgQb7/9Nt566y3MnTsXs2fPxowZMzB9+nRMmzYNkydPxsSJEzFo0CAuiAo6bnL/i5fQ/sAx+L67nL8AEF1ElhN2s6s/QxkyZLQBaLKHEGvVUVHoMHY8QrplQEFCIiVWOktH+cIL9mSz282QtDS0r6oye3+PHw5DlZika8/ywgbIiaYyZPzBwSwT4ho28f0fGQWvddsQnJsH5SuvmBcsIhMTPxIt5YQJUE6aBAVZR4opU6AgN1HxxhtQzJzJXUffN9+E7/z58CHLyufdd+GzeDF8yOLyXrqUB/C9yRLz/vRTeJFl5vXFF/D68kt4ksXmsXUr7mhsND+GxoskrN0QdFdvbhHS+E8SU139ecqQIaOVIAbZn2NiFXR3H3ht2AGvr3YiqGcx/J55xqJgXQ8Mzs6G/+NPk3C+ohOtauI/XP25ypAhoxUgrte7HJLWCd6fbOBixRhYfg9ZW4+4XJCsClZODgnWU/CqqETggAd07uFk2TWUIeMPBrVQDmYrS1/wmzS9Saw8t+6H/5BhCOjXz+WCZFWwMjPRYdQzfNw+y9eB5YzRM/1ETHT15ytDhgwnQgxSI6i4vFmsvtsLtzPn4DdmDLmFPU3SGa43hnTuDOVLk+G1cRcfv5KEV7SyPnD15ytDhgwngSb07dy6ioqC74KlgmDRpHc/cZoLAQukB2dlwe3cOZeLkiWqEhLgs2gR2h86LjzD+u0I1uQzwbriigA8ACWxjPg4cSAxlSjH1GTIaCloIncUy7bwTHZdoL199dEmIfCdNw8hnTrBra5OUijcTp+Gx/ffQzF1KvyHDkVgr14I6tEDwfn5LWZQYSEC+/QhF28UvJcsofFU444LF8yKldv581CHhsJrzRohzaGqhj+HYuZCqIUqDz8Snybe2pqfJwnSrcQHiTst5MKyhZf5rTkOGdcP4JcHAyo1lYbntbsMz2uvwSvX0yVjVWoeNRmvQjNSOKf9yuScs6nU7pUcGE3cvxAf15WIYfR95+NmV/BCcwqB18qV3HpxP3TIQCTcDx/mqQssdqSOiHB67pU+VXFxCLzzTp7uwJYDGQtW+337uDB57NghCNiZ8/DavIcH4IMzc3T9XCOuI0a3ypcNdCcetyOJ/w2i/ELgDw7rgqUZYyoS2odcMlaldovpWPKU4rm2FyyarDcRE3RWlWh9ILh7QVPsyp0tv9ETA4/du3maQPtduwShOnoUimnTwLPgWWVROvev+Hi82rUr1mq1qC0qQmNpKS6XlbWYZ0tKsKugAB9kZ2NUairyY2IQKVYiZdaXZ0WFgcXFhExFY2BZ900idvAYfx7/J54WBCsiklthYmLpaGemPJDwDLd/0RHHC84ag4zrE1YFiwRBos03bT5OyXFoNzWdb2vBogl6G3EU8bRaHYrggmIE3dmbT2a/5yc1WVfGwXW2fo8Jm9fq1fDctAmB5eV84jOhepZcxR3k/l2hYyBXsLXIBHClRoPeZOmF072ZWCqff54sKWG5EFu2E0KC6VZf3zz2xovw/HYPfJat5YIb0qUb/B8bQ8KWoLO4VjGX2OEvWohTtRRXiTGOjkHG9QtrgsXbWLBs2mycCu1oS5ZemwqWWsA6vkCYJi97/e/9+SYE52h5jSnfRZ8KsatDx6XfwKWkwH/IEISQtcMme18SjiqygK62okiZE64PyeqKZ5YhCRcbk/vx4+gwciSCyLIzFtv2NUIAnj0nE12f5RXwXbAEQT0L9Te9GNHStYckNm7EM2bEaDFxCARX8V7iK8QTUu2c9JuTcR3CJsHy0/5Hot1jbTpOpXaHkXgYxNJoPANIwJ6xgUslxHeVTdcqtcOYWD3E3SCa4IHkbnlu/pZPYu9PvxJdrBJ4r9kCr292w+28dGCbpTWwtlHUx2SyZH6mfpiA/FJehncz0lEaGYG44ECkqoIxq0sXh4WpvrgIxZHhiAkKQBd1CB5KiMfO/Pym8zXkFhbFxvIxseA8C9T7PfWUaTC+4QK8NlXB/+GRoiX5ilDLq+4klC+/DJXQhy621cHuLxl4SEKAzhNzzLT/X+Jao/a/sOOO/NhkXL+wSbBIGLhAGArG9204xmAJa+fLFvWlyOsjIViP2NyBWtg2S3ChTp2Ce/0Z4Q3arIV8EgcMe0RwB7dXS4qVx/btPOgdSm3nZ2Y2uX9MtIbEx8KvgxIdRLK/M0NVDgvWsqxM3pefXr+hAf5Yr8ltanOupAQlomgx+nz4oeT42XOxooP8WQcNFeJ0x04KbxO/+47nb4l9pNv95QAbJQSrp5Vr3IkXiTXEl4jymsc/MGwRLN5OqdngKreQWzcm99bc37K+HBespWxCsoXE3E2qreOTtsMYoUY6W3snFWzXBdhZkDuMLKspZFnpi8qSzAwuTjPJojpP4sEEbHePfNSQNeaoYDFR3KTVkqVVzN3OHWRBPUxW1j3RkWige+na1dH5QlG0FK+/Lpnc2r76CHyWVXBrKqigSHB9Dx5rOs/SMEQry+5YEonNSSOxqocNb/6ojb+995Lx+4TtgpU3VCKGNLpNxqjQVhtZV1dwe/o/W9aX44I1k1sg778vTuCjwhrB/oOhjoyEYsbb/P9ZVrvBZG9shPKll3is6P6kJPwkuoE6HiRhOq8nHm3BfQU9TMaxuXt3JIeHQ0VjlCpB4378FLxXf4uQ1E4I6ZrO3V9W+E93niXFiukdIXZ/OcBlI8Habm8fNt7ne6P7zLDQ1hiHiDZXYqW22RJ9zLLjflI4TFxOfIL4Fyv3T5S43u7lVWb6sRVOW85ls2CRQHChMBSsnc4ah9nxKTSxEmP8pOX9OS5YvAIDK/PCXbx9h4VAdI8iqBKS4PveJzyz3SRgvXs3D7KzdIJasrLaUpjs4TXieNGt6/Cf/5jGsc6e5wmxLB9LlZzKN8/w2Nmc/iCWWD5CtNv8ph92ldEPvcHahGwJ4JhgMQyy415bJK53VLD0UU0MstDfDSlYvK1S+7nE27Ngq/do1+4muvac4X3yptg0PqX2RQmB6WPPMxr05wTB+jePYY0fLwjWnhq+bCUkPZNbHT4r1sHz+30mE1353/9yEZjohCB6a5PlbiWz5FWyGPVzsXTpDbxMTlEZT2nwXbiML+oWEkzP6OJXO4jt7f5ygE8lfuxON+PhuGAdJd5iw31KzFzvTMFiqIMZtxg3tGBpBki4hc9Yv0euRiJoXm/T+JTaI0bX/QSv3L/Z8YiG/TlBsEq49fHkk82CVbGV5yWFdO4K71Xf8A0djJe6hHTsiLiwMOxzQkyqLfh/nTpx8VFOnGgivtwFvrsvWVOx8J33QZNAu9fU6ARrPfHvdn85wFCJH/uvxPtgg0DYcR9HBYvB4o+Gzt9E3GfmWmcLFsMWM/3duIJFQkGC8auRYFVbvYdCO1fCMmNWlsUXSTSWZAmhc6hYgDMEK5VNSv/hwwXB2lsL74rKZsH6fBMXMYM3axs28Ik8lETrVzNJoVd7lfOY0owunTE8Pg4DYmPwXEoyPs/JwcXS0hYLz1W6X3VBAWZ37YIHE+LQPyYaT3dM4m8OGyzEzH4gYWVpFyyx1XjdIRes3v25+6d48/0mwWJLeUTB+ljdgh13IKwdPGXmR89yriYTM4g32du30X2cIVhniWb/5aRz/S1ca49g3W90/s/EbsRaibYm6R9oXcFq81JD9ggWb6/UfCzxxi7WbPt26TeTyDRKC5bmDSv3elniXmUtfVbepxMEK5QljOpqWrVnMax12xDSNYNvSMrysfSD0Dxz/NVX+USelZ4uKQ6/kCi8lJaKyED/pvQDxsioCKSmpuDu6CjsyO/eItduSqc0xAYFGPQbFh6KNDrei/r9vnue5LU/0rVZUVFC/fc9e5qtxQuNgkt4Z2+oYuPgO38JPCt/EIR540adYL3V4i+IJqiFia4DSy6dScxHCywvOEewGMaZueYWCG6jObRYsPTaqYk/GrWdI9HuBhesvLslrhlvtr2vpkBSrARr6RyLb5m/l7beqP1FJoAOPa8TBMufJY4GkdWj/5YwOFsDVXIKfJau5laXvmAFDBzIg+1sbaCxMLCUgzFk8fjrCQrj4MH3Y//+/Thxog6L31+MbtGR3FKyR7Ceon4D/f0M+i3vVYZdu3fhRP0JLFm6BJkJ8dhLlp3U9YOTkvhCbL5IWidYZ84Jz5tfyDeqYFn9upwztrBbFKxXHfqSgEFWhEIfjcTZxEA7+neWYF0iuklcI5UAqw+HBUts+7ZRWxN3Bze6YLXL+wuPIxkKyRGz7RXad8wKFqOPJlfyOp+8LhJjW+Dw8zpBsNg286eDSXzcGhp4vhW3OMrv4RaHYv6H8NitV4mB3KlgjQYdwyOwu4dp/IplthuLSnh4GC5fvmzwyxjz1BiURIZzy8cWsVqVk23QJ08apfscO2b4D/+4Z8ZBE6bm1phxHy936SJUnliwoDmt4dhJsii38pQGZlH6fLqBl59h59hGGKJgSVoedn1RgutnnMVuCdfECWw1dgbnCRbDJKP2f4PgLlqCPYI12ELbEUZtf5Roc0MLFr9GqV0kEY8yWfdq0R1sjoGZWLH8WoXmNQlhcbjskTMEixXoOxqckUGT9xjfX5BXMRj+KF9fp3x1Fjy37dezSM6AtU0Lj8S+/CIDQWBr+ZgIMTFR+imgUCr43506p5n8MubNexNBJDifZGdZFSsWJ8sn0TMWrBBVMK5du2Y4c2bP4tnvTOCM+3krI1MQLDGFQ2dReq/8GqqkZARn5fI3pO0PCPW+WNUJUbBGOPpFNX1hQDQE9++CFRHQ4WtYES04JljGgfSfib567cdInD9sdGymHfezZGG9atT2qEQbWbD8tEUSwjPJpJ1CU2ZRrATrrFHKLZRwBy26jzY/rxME68/E6qbYTmMjX0+nnPi6kLvE6qBvqpIUrO2aIp7npBOEqh49TKwrRv+ADtiypTl95+LFiygtLeHnxiZ3tCpYRwsL+dIb434Zl360tEm0LtH4+vTpzY8PjY8z6WeBUMddyHrXLS3adRA+73/GXcXAu/oIWf1HhKx+v7FjdYJ1r6NflMkXB9xMJJ8Yb0JwxSyBLfExH2twTLBYQcF6o2Mzxba3S4xtPLHS6JgzYljsBYXxQvGPJNrd8ILFr1NqG4wExVTclZrFEgIlVfnBwHKCIjdLwoIz+5uy63mdIFhs+65tqsREeHz7rRBs/naPsFsyWzx8733c6mALhfkkJ7eR7UDTMSwCazN64teyZkHYQK6ilKgwpqalYMrUKXhn4TsYMKA/d+fY8SFxsQaiJ8U9JITm+o2Lj8WElybg3ffexX2D7kOAGOhnlp5xP5M7pQsW1ty5wrOQcHpu2Qe/CVP5cb7XIsvqrxfK0vgPG6bb4r7QGV+WOUB4U1ZKXCYxiXS4x8L1jggWeykw2OjYFWIghLWM+mBW4W1wTLBMXEI69ifiAom2JgmKcHFag733sTqOFgtW3jzTeFRu5+bzqbeS1fWjcawLytxuEiI237Bv7SxTUdFkOuV5HRUsBlb7idWQ0q0nZHlX3msroaZjId0y+ZtC9/rmrehZdc/o0DAs7twdDUXNaQ1sfZ9OSJhwMMvKnNDoODzB1BIy5v6CAviLAhcYFNAkSpbYKyrC6GVALwxNSOVLibw/+kjMJ7vAq1AE9hkgWF6zFsJrcxXczglVSwPvuosdv0js5owvyxbQnIgnHpGYK/uJkm9o4JhgsRcCN4v962MV8SejY4854X4/ENcZsVqi3Q5IrLuELFjCdUo22Uzcwql65++REJ0J4jljd69R9/ZPOivetiRTm8btJMGapz+RdQug+USm42wis0XCOsHye+45PsFfTs7CQW1zcPtwYU9Ek6CkdUrF+fPncOzYMZ5yYElYJndKsypYZ4qLeXmabuldUVdXh5MnTyKeXD5L/Y4zcjXPFpYhOyKGrylkNeZ5wL3uFLceVUkdoYqL53977DggLEMi15i9iBAKGrZO2WRzoHnhBeFtoTESzLR3REAGi8fvtDJXmdv4V7GtIxaWLWAldSLN9CcLVjvrwiKZr+WbGyeeM82vUmqK+TlFbneJcw69JTcYt5ME60Ve+6q0FN7LlpE1RRP5611QTnxNcJWGPyokU4rrCdl28ez4kLg07M4pw8ViQRR+Ky/HMBKSklJhBceVK1eQkppsVlQiAwOwtbv1fCzmMrJSNSWlxbxPhqzsTLP9BpNlp18fi3FzdiFiySoMovuxKqnckqyqgeKNBYLrK8avWMCd1YBnoiyWeT7aknWEjoIecZzEfLnLTFuHBUs8Z2lzjEF67VpTsFgulsZCf9edYDEhMC04l6OyaRym7pnNda6o7XQp1w0e6X83yYhXag80X5fX0TQAr31P7HO+aZ+5KbaOyeqYnSRYWuJu4q9s8oZ06owOY57jlpWqYwpPb/Be8x3cTp8TLZM6sG2/0kKjUZFeiANkZV0tF4Rhe353JJI19MADg9G3bx+evmBOXJ4VraBjRYU8K14qp6tCrHHFrLc4VTD69e/H+x315Ciz/Y5MSjSIi50vLMeLyUL8qsOYMU3xK69N5A7ec6/wNnTSdCinvUlWZT/dVvaMZ4iziX+1+4sRivEVQcipMuvOWbg+X2K+PG2mrbMEK9fMPGVu3E167VpDsNibx7FEizvC4DoMujPrxNSa0Uj+42JwHbOSTAVrs8339dN2lbCG3oBvXj+JoLlBao7JGkEW73LLu80kDcJCjldL4BTBYqBJ+U9ib+JHxJ/ZhGWLgZmrxOtijZ/MKzno3EL/hx6CWhWKlztmoYqsrFMFzbGsT7OzEBHoz2NNGzZswICB/Q3zp4j3x8U05UrVkhgNjI2m/y81sKrYMp6nk5Oajq3MyUYCiSHr44svvsCg++8zEat+MdG4oLf055eyXvhBU4bMiGju3npu3iyI7pF6+KxYz5NFeU335t1zGKuJzxPjWvSlADkQ1gzqI9vOPjIlJtQrZto6RbDE819JtCk1auOIYE2CkJOmzwA7PpfrT7B8cjtLCMdYq9d55QZKCNZyu+4tlX5gQ1UHssSek4iBmSaZWsiibwmcJlg6qIUtvlJYdrda2K9P2DknIxteFd/z6gY8C7yigqcCdFbHoDKrBHtzy3CppNmqYUtk/hUdRSKhMgiSsxjX3K5dDNYTMnEaFBvD3+y92ikNc+j8E2QlsfLHm/Kas+mvihZcfxK3sDC1QVCfpT1M79LZYD0hs/qO5ZfjtdRs6Fxe7tayt4PbquH/+FPGW4ax3YL6EhUOfSlAhMRkWGRnH09J9PGgmbbOFKwko/MmLgqc/JbQHuB6FCxWq8p0om+wep1UUT470wck41E2xMXgmR1k9TpBTJy6CYrTBUsfNHHdicNEiwMdnpnQFHxnFRv8R4wA22Hn8bhuPJa1nyyZn0oN3bojhYVYR27d52QdMbExLrCnIzvOFjT3CA/jlUpZzMo4DqXP40VFPI2C9cvE8ZLEguqTZPVVZBSiG1lXqshIeK5fL1ZKrYf3yo3c1aXnOkdcQEx2yofWruk1/V6JCVFq/Wp+vQ+kF023RtDdJC+KjqWg2frxs+F+9iSO/uEEi/en1G6SiAt1Ndu+XeItdM0Ppq6k9k777isVjzIRLMkNK1gBQMvXNce9nIVWFSwdxAXSPzP3yfvL75pysjy2beO7PkeFRGB+Wh53DVk865cyaZGxhdd6CRUZWnp981vBcmzNLiFrLFmIXT36KH/zd8eFRr64OWDgv3VWVatsSkk//n4SE4Jt28USNc1WfoCQCb9H4toaC9c4zcKy8dlkC8u4P6laVUyQlBrTtZnt2v1J2v3SHmVCZv+9jeJRhn2a3SmaxvCkFaGz6tbaPda2ECwG8U3iNbZlvcfu5iJ4PosXc9cwLiQKS7r04KIlZWm1FZkbWE+W1fbsUjwUL9TACs7La9qTkC3FUU6eCVUUfwO4l8XunP5hiYCQYySFWuJcCGvnWKCbWTL9iUvMtGfoa+E+smC5qJ+m/oR1ewckJn0dm5AkDhmcZEFJbightB3YonsrNS9YEB2zrqnk5qj6JLexpZ+HhXu2mWDdwStvRkZBOW0ur4VuUH00LBydVbF4iywt5h7uyy3jVo61LHZnkonkke7l2JJVghFxQllkVpPdY8sWwY09dRY+H63m1VTp3FVintM/KD3QBFBCeq9Be2FxlTxkwbIKZ/UjQlLYJLPIbaVCu76la/XovlHm+9YMsXytdrOtcS9noM0Ei0Es9neFpTp4f7oObmfOC0Jw7hwvscziWQkh0Rgbn4FdJFp7iDV55Thf1LrC9VuZEK9ibwPXpBeiJDIJoTSWkPR0eH79tRBoJzfW89sqBJX00rmC04gOL+a0BvpxJ8D8Zqq2gC0ItrjTDmTBsgpn9SPCrCVGwjPRbrFSavdKuY52fS6S1p313W1ovCPsiXs5ijYVLAaa5EOYdcJ2S/b6cpPB5qq+8+ZBlZCI0OBwaFSJeDNVi63kmjE3kb1FZPEtJmCHyQpilhB7g1fXo5y7cKd6lnOLrKGoFxqLe+FyiWAx/SyS/c2OXaJzF4qEGBW79hD1x4Txm8xijIzvhjh1JE9fYG8E3Q8caF4zWLmP7zsoitXnrekKGoN+4P7ErXZOiipiho39y4JlBc7qR4RF15Fv62688akly6qFW2YZ3FOpfUqi75VWr5PapFUQkVZJlnaFYLHqDm/zNIGiUnh91ZzqwDcfJfeLr8FThSI8KBI5JFzM4lrRtYCnPzDxcgaZ2/lVRhHeIlF8ILoTklXR/J6szDHbtZltCts0pr218H/wMZ4gSuOuIjrdN7cGCDXR+0FYI2cJ24h9YUfZZMiCZRXO6keE1VgX3x5Lqf2SeNWMVXUIyrz7WADekc+j6X5SaQoKjU1VRmgsa43GttEZY5K8V1sLFoMoWstZED44rwe8KjY3V3MQydYlBufmchEJDYpAWEAUwv2jkRoUT9ZXErozqgXm6RgqQfGc0LYj/zsrJAGxgTEIDYzk1lxoaBjCw8N52Ru2/VhzscFGeG7bi4ChD+ssq0PqFuwv6GzQD/4OCMF2tvB4tPhf9v+3u3psMpwLvkyG7VrDcq6U2idocvaCjybM1eO64UATvz1xMXcPszXwWfpZU5WDJhdxzhwkJiZh1GNj0Odf9yKfxC0lKQ3R4bGIDI1CBGNYpMBwxggJRja3Ea+JiYpF1y5dUVxUgqEPPIjJL01DQX5PdHjiCSF1Qdzo1fPrSrC3mqJlxd4Ixrv6c5MhQ4aLIC7nmcGX8SQlQ/n6HF6xtGl3nU2bEBcXj48WfYKqymqcqKvH0aNHcejQIRw8eLDFrKmp4VUbaqqPoOr7amxc8x26dO4Kn0WLhJcAZO15r6wgCy9PZ1ltI9q0GFWGDBl/cLASwrxuVFg4AvsNgueW7Tx25Hb6NF+nN3nCVOzdegCXGo03RXEMdYdPccGaMW0Owug+7Q8cgPvROnQY+7wuz+o3Md7m7urPSIYMGdcJxKqlLOXhB25tJXaE8tXX4X7iJH9b9/DwR7mwNJyVKvHUctT+cJz3+9CwRxBUWAjvFZ8huHuBzqpihffYrtZO3xpehgwZfwCQOPyDOJ5Yz8vUpHVCUM8iFPUs4cJyuu6c08Tq6tVr2L+rFutWfYPMjCxeWUIUqp+IS13xJlCGDBm/Q7CyLLyKqVp9iYlIdHQMD7yvXPE5fvrJuOqu/WCbTlTtrsKEFyahsGcxQkNDdWL1JbGXugW7NMuQIeMGBonGzcRE4nTRPUNsbCwKCgowevRofPjhhzwAb7xNlzk0NDRgzZo1mDBhAnr37o2UlBSeWS8usVlHvJN4m6ufW4YMGb9ziOsQ7yOuVQs10q/palDFx8cjLy+Pi9ADDzyABx98ECNGjMCQIUPQr18/FBUVITU1Vd+Kgmi57SSOUwtwSvKdDBkyZDSBrd1TCztN54jVH1YT9+ssMDNkZZuPEDeKKRR3E4NZ8qqrn0eGDBlti/8HkDichQjgGyAAAAAASUVORK5CYII=';

const defineSjwtBranding = () => {
    const name = 'sjwt-branding';
    let customElements;
    let ParentElement;

    try {
        customElements = window.customElements;
        ParentElement = window.HTMLElement;
    } catch {
        return;
    }

    if (!customElements || !ParentElement) {
        return;
    }

    const existing = customElements.get(name);
    if (existing) {
        return;
    }

    class SjwtBranding extends ParentElement {
        static get observedAttributes() {
            return ['is-dark', 'height', 'width', 'open-in-new-tab', 'powered-by-color'];
        };

        shadow;

        stylesheet;

        container;

        link;

        logo;

        powered;

        poweredPath;

        isTrue = /^true$/i;

        get isDark() {
            return Boolean(this.isTrue.exec(this.getAttribute('is-dark')));
        }

        set isDark(is) {
            this.setAttribute('is-dark', is);
        }

        get IMAGE_WIDTH() { return 300; };
        get IMAGE_HEIGHT() { return 60; };
        get POWERED_WIDTH() { return 96; };
        get POWERED_HEIGHT() { return 13; };
        get POWERED_TOP() { return 8; };
        get POWERED_LEFT() { return 112; };

        get height() {
            // default height to 30 unless a height or width is set
            const height = this.getAttribute('height');
            const width = this.getAttribute('width');

            if (width === null && height === null) {
                return '30';
            }

            return height;
        }

        set height(h) {
            this.setAttribute('height', h);
        }

        get width() {
            return this.getAttribute('width');
        }

        set width(w) {
            this.setAttribute('width', w);
        }

        get heightPx() {
            const height = Number.parseFloat(this.height);
            const width = Number.parseFloat(this.width);

            if (Number.isNaN(height) && Number.isNaN(width)) {
                return this.IMAGE_HEIGHT;
            } else if (Number.isNaN(height)) {
                // scale height based on how different set width is from base width
                return (width / this.IMAGE_WIDTH) * this.IMAGE_HEIGHT;
            }

            return height;
        }

        get widthPx() {
            const height = Number.parseFloat(this.height);
            const width = Number.parseFloat(this.width);

            if (Number.isNaN(height) && Number.isNaN(width)) {
                return this.IMAGE_WIDTH;
            } else if (Number.isNaN(width)) {
                // scale width based on how different set height is from base height
                return (height / this.IMAGE_HEIGHT) * this.IMAGE_WIDTH;
            }

            return height;
        }

        get poweredHeight() {
            const heightRatio = this.POWERED_HEIGHT / this.IMAGE_HEIGHT;
            return `${heightRatio * this.heightPx}`;
        }

        get poweredWidth() {
            const widthRatio = this.POWERED_WIDTH / this.IMAGE_WIDTH;
            return `${widthRatio * this.widthPx}`;
        }

        get poweredTop() {
            const heightRatio = this.heightPx / this.IMAGE_HEIGHT;
            return heightRatio * this.POWERED_TOP;
        }

        get poweredLeft() {
            const widthRatio = this.widthPx / this.IMAGE_WIDTH;
            return widthRatio * this.POWERED_LEFT;
        }

        get poweredByColor() {
            const userSet = this.getAttribute('powered-by-color');
            if (userSet) {
                return userSet;
            }

            if (this.isDark) {
                return '#179461';
            }

            return '#2B614B';
        }

        get openInNewTab() {
            return Boolean(this.isTrue.exec(this.getAttribute('open-in-new-tab')));
        }

        set openInNewTab(open) {
            this.setAttribute('open-in-new-tab', open);
        }

        constructor() {
            super();
            this.shadow = this.attachShadow({mode: 'open'});
        }

        setDynamicAttributes() {
            if (!this.logo) return;

            if (this.isDark) {
                this.logo.setAttribute('src', srcDark);
            } else {
                this.logo.setAttribute('src', srcLight);
            }

            if (this.width !== null) {
                this.logo.setAttribute('width', this.width);
            } else {
                this.logo.removeAttribute('width');
            }

            if (this.height !== null) {
                this.logo.setAttribute('height', this.height);
            } else {
                this.logo.removeAttribute('height');
            }

            if (this.openInNewTab) {
                this.link.setAttribute('target', '_blank');
            } else {
                this.link.removeAttribute('target');
            }

            this.poweredPath.setAttributeNS(null, 'fill', this.poweredByColor);
            this.powered.setAttributeNS(null, 'width', this.poweredWidth);
            this.powered.setAttributeNS(null, 'height', this.poweredHeight);
            this.powered.style.cssText = `
                position: absolute;
                top: ${this.poweredTop}px;
                left: ${this.poweredLeft}px;
            `;
        }

        connectedCallback() {
            this.stylesheet = document.createElement('style');
            this.stylesheet.textContent = `
                :host {
                  display: block;
                  line-height: 0;
                }

                .container {
                    display: inline-block;
                    position: relative;
                    line-height: 0;
                }

                .link {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                }
            `;
            this.container = document.createElement('div');
            this.container.classList.add('container');

            this.link = document.createElement('a');
            this.link.classList.add('link');
            this.link.setAttribute('href', 'https://simplejwt.com');

            // TODO FIXME okay, just make this whole thing an svg. smh.
            this.logo = document.createElement('img');

            const xmlns = 'http://www.w3.org/2000/svg';
            this.powered = document.createElementNS(xmlns, 'svg');
            this.powered.setAttributeNS(null, 'version', '1.2');
            this.powered.setAttributeNS(null, 'viewBox', `0 0 ${this.POWERED_WIDTH} ${this.POWERED_HEIGHT}`);
            this.poweredPath = document.createElementNS(xmlns, 'path');
            this.poweredPath.setAttributeNS(null, 'd', 'm2.3 0.8h-2.2v11.2h2.2zm-0.9 0v1.9h2.1q0.8 0 1.3 0.5 0.5 0.4 0.5 1.2 0 0.8-0.5 1.2-0.5 0.4-1.3 0.4h-2.1v1.9h2.1q1.2 0 2.1-0.4 0.9-0.4 1.3-1.2 0.5-0.8 0.5-1.9 0-1.1-0.5-1.9-0.4-0.8-1.3-1.3-0.9-0.4-2.1-0.4zm9.3 5.6q0-1.1 0.4-1.9 0.4-0.8 1.1-1.3 0.8-0.5 1.7-0.5 1 0 1.7 0.5 0.8 0.5 1.2 1.3 0.4 0.8 0.4 1.9 0 1.1-0.5 1.9-0.4 0.8-1.1 1.3-0.7 0.5-1.7 0.5-0.9 0-1.7-0.5-0.7-0.5-1.1-1.3-0.4-0.8-0.4-1.9zm-2.3 0q0 1.3 0.4 2.4 0.4 1 1.2 1.8 0.7 0.8 1.7 1.3 1 0.4 2.2 0.4 1.2 0 2.2-0.4 1-0.5 1.8-1.3 0.7-0.8 1.1-1.8 0.4-1.1 0.4-2.4 0-1.3-0.4-2.3-0.4-1.1-1.1-1.9-0.8-0.8-1.8-1.2-1-0.4-2.2-0.4-1.2 0-2.2 0.4-1 0.4-1.7 1.2-0.7 0.8-1.2 1.9-0.4 1-0.4 2.3zm24-5.6l-2.2 7-2.9-7.6-2.9 7.6-2.3-7h-2.5l4.4 11.8 3.3-7.3 3.2 7.3 4.4-11.8zm5.1 9.3v1.9h5.2v-1.9zm0-9.3v1.9h5.3v-1.9zm0 4.3v1.9h5v-1.9zm0.6-4.3h-2v11.2h2zm11.3 6h-2.2l3.1 5.2h2.5zm-2.5-6h-2.1v11.2h2.1zm-0.8 0v2h2.1q0.5 0 0.9 0.2 0.4 0.2 0.7 0.6 0.2 0.3 0.2 0.8 0 0.6-0.2 1-0.3 0.3-0.7 0.5-0.4 0.2-0.9 0.2h-2.1v1.9h2.2q1.2 0 2.1-0.5 0.9-0.4 1.3-1.2 0.5-0.9 0.5-1.9 0-1.1-0.5-1.9-0.4-0.8-1.3-1.2-0.9-0.5-2.1-0.5zm9.3 9.3v1.9h5.2v-1.9zm0-9.3v2h5.3v-2zm0 4.3v1.9h5v-1.9zm0.6-4.3h-2v11.2h2zm8.9 0h-2.2v11.2h2.2zm-0.8 11.2h2.1q1.7 0 2.9-0.7 1.2-0.7 1.9-1.9 0.7-1.3 0.7-3 0-1.7-0.7-2.9-0.7-1.3-1.9-2-1.2-0.7-2.9-0.7h-2.1v2.1h2.1q0.7 0 1.3 0.2 0.6 0.2 1 0.6 0.5 0.5 0.8 1.1 0.2 0.7 0.2 1.6 0 0.9-0.2 1.6-0.3 0.7-0.8 1.1-0.4 0.4-1 0.6-0.6 0.2-1.3 0.2h-2.1zm15.3-6.7v1.1h1.9q1 0 1.8-0.3 0.8-0.4 1.3-1 0.4-0.6 0.4-1.4 0-1-0.4-1.6-0.5-0.6-1.3-0.9-0.8-0.4-1.8-0.4h-3.5v11.2h3.7q1.2 0 2.1-0.3 0.8-0.3 1.3-1 0.5-0.7 0.5-1.8 0-0.9-0.3-1.5-0.3-0.6-0.9-0.9-0.5-0.4-1.2-0.6-0.7-0.2-1.5-0.2h-2.1v1.3h1.9q0.4 0 0.8 0.1 0.3 0.1 0.6 0.3 0.2 0.2 0.4 0.5 0.1 0.2 0.1 0.7 0 0.5-0.2 0.9-0.3 0.4-0.7 0.6-0.4 0.1-1 0.1h-1.4v-7.5h1.2q0.7 0 1.1 0.3 0.4 0.3 0.4 1 0 0.4-0.2 0.7-0.2 0.3-0.5 0.5-0.3 0.1-0.8 0.1zm15.6-4.5h-2.5l-2.2 4.5-2.2-4.5h-2.5l3.6 6.6v4.6h2.2v-4.6z');
            this.powered.appendChild(this.poweredPath);

            this.setDynamicAttributes();

            this.container.appendChild(this.link);
            this.container.appendChild(this.logo);
            this.container.appendChild(this.powered);

            this.shadow.appendChild(this.stylesheet);
            this.shadow.appendChild(this.container);
        }

        attributeChangedCallback(attributeName, oldValue, newValue) {
            if (oldValue !== newValue) {
                this.setDynamicAttributes();
            }
        }
    }

    customElements.define(name, SjwtBranding);
};

defineSjwtBranding();
