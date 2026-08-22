# `dataSnowflakeMcpServers` Submodule <a name="`dataSnowflakeMcpServers` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeMcpServers <a name="DataSnowflakeMcpServers" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers snowflake_mcp_servers}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeMcpServers(Construct Scope, string Id, DataSnowflakeMcpServersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig">DataSnowflakeMcpServersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig">DataSnowflakeMcpServersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.putIn">PutIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.resetIn">ResetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIn` <a name="PutIn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.putIn"></a>

```csharp
private void PutIn(DataSnowflakeMcpServersIn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersIn">DataSnowflakeMcpServersIn</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIn` <a name="ResetIn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.resetIn"></a>

```csharp
private void ResetIn()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.resetLike"></a>

```csharp
private void ResetLike()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.resetWithDescribe"></a>

```csharp
private void ResetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeMcpServers resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeMcpServers.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeMcpServers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeMcpServers.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeMcpServers.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataSnowflakeMcpServers resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeMcpServers to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeMcpServers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeMcpServers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.in">In</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference">DataSnowflakeMcpServersInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.mcpServers">McpServers</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList">DataSnowflakeMcpServersMcpServersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.inInput">InInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersIn">DataSnowflakeMcpServersIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.likeInput">LikeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.withDescribeInput">WithDescribeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.like">Like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `In`<sup>Required</sup> <a name="In" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.in"></a>

```csharp
public DataSnowflakeMcpServersInOutputReference In { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference">DataSnowflakeMcpServersInOutputReference</a>

---

##### `McpServers`<sup>Required</sup> <a name="McpServers" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.mcpServers"></a>

```csharp
public DataSnowflakeMcpServersMcpServersList McpServers { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList">DataSnowflakeMcpServersMcpServersList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InInput`<sup>Optional</sup> <a name="InInput" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.inInput"></a>

```csharp
public DataSnowflakeMcpServersIn InInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersIn">DataSnowflakeMcpServersIn</a>

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.likeInput"></a>

```csharp
public string LikeInput { get; }
```

- *Type:* string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.withDescribeInput"></a>

```csharp
public bool|IResolvable WithDescribeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.like"></a>

```csharp
public string Like { get; }
```

- *Type:* string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeMcpServersConfig <a name="DataSnowflakeMcpServersConfig" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeMcpServersConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    DataSnowflakeMcpServersIn In = null,
    string Like = null,
    bool|IResolvable WithDescribe = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers#id DataSnowflakeMcpServers#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.in">In</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersIn">DataSnowflakeMcpServersIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.like">Like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `true`) Runs DESC MCP SERVER for each MCP server returned by SHOW MCP SERVERS. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers#id DataSnowflakeMcpServers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `In`<sup>Optional</sup> <a name="In" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.in"></a>

```csharp
public DataSnowflakeMcpServersIn In { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersIn">DataSnowflakeMcpServersIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers#in DataSnowflakeMcpServers#in}

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.like"></a>

```csharp
public string Like { get; set; }
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers#like DataSnowflakeMcpServers#like}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersConfig.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `true`) Runs DESC MCP SERVER for each MCP server returned by SHOW MCP SERVERS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers#with_describe DataSnowflakeMcpServers#with_describe}

---

### DataSnowflakeMcpServersIn <a name="DataSnowflakeMcpServersIn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersIn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeMcpServersIn {
    bool|IResolvable Account = null,
    string Database = null,
    string Schema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersIn.property.account">Account</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersIn.property.database">Database</a></code> | <code>string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersIn.property.schema">Schema</a></code> | <code>string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersIn.property.account"></a>

```csharp
public bool|IResolvable Account { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers#account DataSnowflakeMcpServers#account}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersIn.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers#database DataSnowflakeMcpServers#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersIn.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/mcp_servers#schema DataSnowflakeMcpServers#schema}

---

### DataSnowflakeMcpServersMcpServers <a name="DataSnowflakeMcpServersMcpServers" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeMcpServersMcpServers {

};
```


### DataSnowflakeMcpServersMcpServersDescribeOutput <a name="DataSnowflakeMcpServersMcpServersDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeMcpServersMcpServersDescribeOutput {

};
```


### DataSnowflakeMcpServersMcpServersShowOutput <a name="DataSnowflakeMcpServersMcpServersShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeMcpServersMcpServersShowOutput {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeMcpServersInOutputReference <a name="DataSnowflakeMcpServersInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeMcpServersInOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.resetAccount"></a>

```csharp
private void ResetAccount()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.property.accountInput">AccountInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.property.account">Account</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersIn">DataSnowflakeMcpServersIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.property.accountInput"></a>

```csharp
public bool|IResolvable AccountInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.property.account"></a>

```csharp
public bool|IResolvable Account { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersInOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeMcpServersIn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersIn">DataSnowflakeMcpServersIn</a>

---


### DataSnowflakeMcpServersMcpServersDescribeOutputList <a name="DataSnowflakeMcpServersMcpServersDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeMcpServersMcpServersDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.get"></a>

```csharp
private DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference <a name="DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.serverSpec">ServerSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutput">DataSnowflakeMcpServersMcpServersDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `ServerSpec`<sup>Required</sup> <a name="ServerSpec" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.serverSpec"></a>

```csharp
public string ServerSpec { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeMcpServersMcpServersDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutput">DataSnowflakeMcpServersMcpServersDescribeOutput</a>

---


### DataSnowflakeMcpServersMcpServersList <a name="DataSnowflakeMcpServersMcpServersList" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeMcpServersMcpServersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.get"></a>

```csharp
private DataSnowflakeMcpServersMcpServersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeMcpServersMcpServersOutputReference <a name="DataSnowflakeMcpServersMcpServersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeMcpServersMcpServersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList">DataSnowflakeMcpServersMcpServersDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList">DataSnowflakeMcpServersMcpServersShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServers">DataSnowflakeMcpServersMcpServers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.property.describeOutput"></a>

```csharp
public DataSnowflakeMcpServersMcpServersDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersDescribeOutputList">DataSnowflakeMcpServersMcpServersDescribeOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.property.showOutput"></a>

```csharp
public DataSnowflakeMcpServersMcpServersShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList">DataSnowflakeMcpServersMcpServersShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeMcpServersMcpServers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServers">DataSnowflakeMcpServersMcpServers</a>

---


### DataSnowflakeMcpServersMcpServersShowOutputList <a name="DataSnowflakeMcpServersMcpServersShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeMcpServersMcpServersShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.get"></a>

```csharp
private DataSnowflakeMcpServersMcpServersShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeMcpServersMcpServersShowOutputOutputReference <a name="DataSnowflakeMcpServersMcpServersShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeMcpServersMcpServersShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutput">DataSnowflakeMcpServersMcpServersShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeMcpServersMcpServersShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeMcpServers.DataSnowflakeMcpServersMcpServersShowOutput">DataSnowflakeMcpServersMcpServersShowOutput</a>

---



