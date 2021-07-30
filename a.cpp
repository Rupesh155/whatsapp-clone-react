#include<bits/stdc++.h>
using namespace std;

int main()
{
    long long n,m;
    cin>>n>>m;

    long long a[m];

    for(int i=0;i<m;i++)
    {
        cin>>a[i];
    }

    for(int i=0;i<5e6;i++)
    {
        long long given=i,ans=0;

        for(int j=0;j<m;j++)
        {
            long long value=floor(sqrt((given*2)/a[j]));
            if((a[j]*((value)*(value+1))/2)>given)
            {
                value--;
            }
            ans+=value;
        }

        if(ans>=n)
        {
            cout<<given<<"\n";
            return 0;
        }
    }

    return 0;
}