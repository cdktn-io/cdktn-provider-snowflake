# `apiIntegrationAmazonApiGateway` Submodule <a name="`apiIntegrationAmazonApiGateway` Submodule" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationAmazonApiGateway <a name="ApiIntegrationAmazonApiGateway" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway snowflake_api_integration_amazon_api_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAmazonApiGateway(Construct Scope, string Id, ApiIntegrationAmazonApiGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig">ApiIntegrationAmazonApiGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig">ApiIntegrationAmazonApiGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetApiBlockedPrefixes">ResetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiIntegrationAmazonApiGatewayTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a>

---

##### `ResetApiBlockedPrefixes` <a name="ResetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetApiBlockedPrefixes"></a>

```csharp
private void ResetApiBlockedPrefixes()
```

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationAmazonApiGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationAmazonApiGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationAmazonApiGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationAmazonApiGateway.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationAmazonApiGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApiIntegrationAmazonApiGateway resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiIntegrationAmazonApiGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiIntegrationAmazonApiGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationAmazonApiGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList">ApiIntegrationAmazonApiGatewayDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList">ApiIntegrationAmazonApiGatewayShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference">ApiIntegrationAmazonApiGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAllowedPrefixesInput">ApiAllowedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAwsRoleArnInput">ApiAwsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiBlockedPrefixesInput">ApiBlockedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiProviderInput">ApiProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAwsRoleArn">ApiAwsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiProvider">ApiProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.describeOutput"></a>

```csharp
public ApiIntegrationAmazonApiGatewayDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList">ApiIntegrationAmazonApiGatewayDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.showOutput"></a>

```csharp
public ApiIntegrationAmazonApiGatewayShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList">ApiIntegrationAmazonApiGatewayShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.timeouts"></a>

```csharp
public ApiIntegrationAmazonApiGatewayTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference">ApiIntegrationAmazonApiGatewayTimeoutsOutputReference</a>

---

##### `ApiAllowedPrefixesInput`<sup>Optional</sup> <a name="ApiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAllowedPrefixesInput"></a>

```csharp
public string[] ApiAllowedPrefixesInput { get; }
```

- *Type:* string[]

---

##### `ApiAwsRoleArnInput`<sup>Optional</sup> <a name="ApiAwsRoleArnInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAwsRoleArnInput"></a>

```csharp
public string ApiAwsRoleArnInput { get; }
```

- *Type:* string

---

##### `ApiBlockedPrefixesInput`<sup>Optional</sup> <a name="ApiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiBlockedPrefixesInput"></a>

```csharp
public string[] ApiBlockedPrefixesInput { get; }
```

- *Type:* string[]

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `ApiProviderInput`<sup>Optional</sup> <a name="ApiProviderInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiProviderInput"></a>

```csharp
public string ApiProviderInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.timeoutsInput"></a>

```csharp
public IResolvable|ApiIntegrationAmazonApiGatewayTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a>

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAllowedPrefixes"></a>

```csharp
public string[] ApiAllowedPrefixes { get; }
```

- *Type:* string[]

---

##### `ApiAwsRoleArn`<sup>Required</sup> <a name="ApiAwsRoleArn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAwsRoleArn"></a>

```csharp
public string ApiAwsRoleArn { get; }
```

- *Type:* string

---

##### `ApiBlockedPrefixes`<sup>Required</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiBlockedPrefixes"></a>

```csharp
public string[] ApiBlockedPrefixes { get; }
```

- *Type:* string[]

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `ApiProvider`<sup>Required</sup> <a name="ApiProvider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiProvider"></a>

```csharp
public string ApiProvider { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationAmazonApiGatewayConfig <a name="ApiIntegrationAmazonApiGatewayConfig" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAmazonApiGatewayConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] ApiAllowedPrefixes,
    string ApiAwsRoleArn,
    string ApiProvider,
    bool|IResolvable Enabled,
    string Name,
    string[] ApiBlockedPrefixes = null,
    string ApiKey = null,
    string Comment = null,
    string Id = null,
    ApiIntegrationAmazonApiGatewayTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>string[]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiAwsRoleArn">ApiAwsRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role that grants Snowflake permission to call the API endpoint. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiProvider">ApiProvider</a></code> | <code>string</code> | Specifies the type of AWS gateway. Valid values are (case-insensitive): `aws_api_gateway` \| `aws_private_api_gateway` \| `aws_gov_api_gateway` \| `aws_gov_private_api_gateway`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>string[]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiKey">ApiKey</a></code> | <code>string</code> | Specifies the API key (secret) that Snowflake uses to authenticate when making calls to the proxy service. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#id ApiIntegrationAmazonApiGateway#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiAllowedPrefixes"></a>

```csharp
public string[] ApiAllowedPrefixes { get; set; }
```

- *Type:* string[]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#api_allowed_prefixes ApiIntegrationAmazonApiGateway#api_allowed_prefixes}

---

##### `ApiAwsRoleArn`<sup>Required</sup> <a name="ApiAwsRoleArn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiAwsRoleArn"></a>

```csharp
public string ApiAwsRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role that grants Snowflake permission to call the API endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#api_aws_role_arn ApiIntegrationAmazonApiGateway#api_aws_role_arn}

---

##### `ApiProvider`<sup>Required</sup> <a name="ApiProvider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiProvider"></a>

```csharp
public string ApiProvider { get; set; }
```

- *Type:* string

Specifies the type of AWS gateway. Valid values are (case-insensitive): `aws_api_gateway` | `aws_private_api_gateway` | `aws_gov_api_gateway` | `aws_gov_private_api_gateway`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#api_provider ApiIntegrationAmazonApiGateway#api_provider}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#enabled ApiIntegrationAmazonApiGateway#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#name ApiIntegrationAmazonApiGateway#name}

---

##### `ApiBlockedPrefixes`<sup>Optional</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiBlockedPrefixes"></a>

```csharp
public string[] ApiBlockedPrefixes { get; set; }
```

- *Type:* string[]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#api_blocked_prefixes ApiIntegrationAmazonApiGateway#api_blocked_prefixes}

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

Specifies the API key (secret) that Snowflake uses to authenticate when making calls to the proxy service.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#api_key ApiIntegrationAmazonApiGateway#api_key}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#comment ApiIntegrationAmazonApiGateway#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#id ApiIntegrationAmazonApiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.timeouts"></a>

```csharp
public ApiIntegrationAmazonApiGatewayTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#timeouts ApiIntegrationAmazonApiGateway#timeouts}

---

### ApiIntegrationAmazonApiGatewayDescribeOutput <a name="ApiIntegrationAmazonApiGatewayDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAmazonApiGatewayDescribeOutput {

};
```


### ApiIntegrationAmazonApiGatewayShowOutput <a name="ApiIntegrationAmazonApiGatewayShowOutput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAmazonApiGatewayShowOutput {

};
```


### ApiIntegrationAmazonApiGatewayTimeouts <a name="ApiIntegrationAmazonApiGatewayTimeouts" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAmazonApiGatewayTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#create ApiIntegrationAmazonApiGateway#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#delete ApiIntegrationAmazonApiGateway#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#read ApiIntegrationAmazonApiGateway#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#update ApiIntegrationAmazonApiGateway#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#create ApiIntegrationAmazonApiGateway#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#delete ApiIntegrationAmazonApiGateway#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#read ApiIntegrationAmazonApiGateway#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#update ApiIntegrationAmazonApiGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationAmazonApiGatewayDescribeOutputList <a name="ApiIntegrationAmazonApiGatewayDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAmazonApiGatewayDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.get"></a>

```csharp
private ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference <a name="ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.allowedPrefixes">AllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiAwsExternalId">ApiAwsExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiAwsIamUserArn">ApiAwsIamUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiAwsRoleArn">ApiAwsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiProvider">ApiProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.blockedPrefixes">BlockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutput">ApiIntegrationAmazonApiGatewayDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedPrefixes`<sup>Required</sup> <a name="AllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.allowedPrefixes"></a>

```csharp
public string[] AllowedPrefixes { get; }
```

- *Type:* string[]

---

##### `ApiAwsExternalId`<sup>Required</sup> <a name="ApiAwsExternalId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiAwsExternalId"></a>

```csharp
public string ApiAwsExternalId { get; }
```

- *Type:* string

---

##### `ApiAwsIamUserArn`<sup>Required</sup> <a name="ApiAwsIamUserArn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiAwsIamUserArn"></a>

```csharp
public string ApiAwsIamUserArn { get; }
```

- *Type:* string

---

##### `ApiAwsRoleArn`<sup>Required</sup> <a name="ApiAwsRoleArn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiAwsRoleArn"></a>

```csharp
public string ApiAwsRoleArn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `ApiProvider`<sup>Required</sup> <a name="ApiProvider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiProvider"></a>

```csharp
public string ApiProvider { get; }
```

- *Type:* string

---

##### `BlockedPrefixes`<sup>Required</sup> <a name="BlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.blockedPrefixes"></a>

```csharp
public string[] BlockedPrefixes { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public ApiIntegrationAmazonApiGatewayDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutput">ApiIntegrationAmazonApiGatewayDescribeOutput</a>

---


### ApiIntegrationAmazonApiGatewayShowOutputList <a name="ApiIntegrationAmazonApiGatewayShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAmazonApiGatewayShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.get"></a>

```csharp
private ApiIntegrationAmazonApiGatewayShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiIntegrationAmazonApiGatewayShowOutputOutputReference <a name="ApiIntegrationAmazonApiGatewayShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAmazonApiGatewayShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.apiType">ApiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutput">ApiIntegrationAmazonApiGatewayShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.apiType"></a>

```csharp
public string ApiType { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.internalValue"></a>

```csharp
public ApiIntegrationAmazonApiGatewayShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutput">ApiIntegrationAmazonApiGatewayShowOutput</a>

---


### ApiIntegrationAmazonApiGatewayTimeoutsOutputReference <a name="ApiIntegrationAmazonApiGatewayTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationAmazonApiGatewayTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiIntegrationAmazonApiGatewayTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a>

---



