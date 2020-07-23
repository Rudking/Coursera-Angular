#include<bits/stdc++.h>
using namespace std;
void processArray(vector<int> a)
{
    
    int count=0;
    for(auto i=a.begin();i!=a.end();i++)
    {
        if(*i%2!=0)
        {
            count++;
            if(count>1)
            {
                   
               a.erase(i-1);
               count--;
            }
        }
        
    }
     for(auto i=a.begin();i!=a.end();i++)
     cout<<*i;
}
int main(){
   
    int n;
    cin>>n;
    vector<int> a;
  for(int i=0;i<n;i++)
  {
      int x;
      cin>>x;
      if(x==-1)
      break;

      a.push_back(x);
  }
processArray(a);
   


}
 